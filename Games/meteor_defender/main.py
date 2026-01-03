import asyncio
import pygame
import random
import os

pygame.init()

# --- SETUP WINDOW ---
WIDTH, HEIGHT = 600, 800
screen = pygame.display.set_mode((WIDTH, HEIGHT), pygame.SCALED)
pygame.display.set_caption("Meteor Defender")
clock = pygame.time.Clock()

# --- ASSET LOADING ---
def load_sprite(path, color, size):
    try:
        img = pygame.image.load(path).convert_alpha()
        return pygame.transform.scale(img, size)
    except FileNotFoundError:
        print(f"MISSING: {path}")
        surf = pygame.Surface(size)
        surf.fill(color)
        return surf

# Menu Assets
logo_img = load_sprite("logo.png", "purple", (400, 200))
background_img = load_sprite("background.png", "black", (WIDTH, HEIGHT))

# Game Assets
bullet_img = load_sprite("bullet.png", "yellow", (10, 20))
banner_img = load_sprite("banner_danger.png", "orange", (400, 100))
background_img = load_sprite("background.png", "black", (WIDTH, HEIGHT))


# Player Assets
player_idle = load_sprite("player_sprites/idle.png", "cyan", (40, 40))
player_left = load_sprite("player_sprites/left.png", "cyan", (40, 40))
player_right = load_sprite("player_sprites/right.png", "cyan", (40, 40))

# Enemy Assets
enemy_normal = load_sprite("enemy/enemy.png", "grey", (40, 40))
enemy_fast = load_sprite("enemy/fast.png", "red", (30, 30))
enemy_fast_left = load_sprite("enemy/moving_left.png", "red", (30, 30))
enemy_fast_right = load_sprite("enemy/moving_right.png", "red", (30, 30))

# Fonts
font_lg = pygame.font.SysFont("Arial", 50, bold=True)
font_md = pygame.font.SysFont("Arial", 30)
font_sm = pygame.font.SysFont("Arial", 20)

# --- CLASSES ---
class Button:
    def __init__(self, x, y, w, h, text, color):
        self.rect = pygame.Rect(x, y, w, h)
        self.text = text
        self.color = color
        self.hover_color = (min(color[0]+30, 255), min(color[1]+30, 255), min(color[2]+30, 255))

    def draw(self, surface):
        mouse_pos = pygame.mouse.get_pos()
        col = self.hover_color if self.rect.collidepoint(mouse_pos) else self.color
        pygame.draw.rect(surface, col, self.rect, border_radius=10)
        pygame.draw.rect(surface, "white", self.rect, 2, border_radius=10)
        
        txt_surf = font_lg.render(self.text, True, "white")
        txt_rect = txt_surf.get_rect(center=self.rect.center)
        surface.blit(txt_surf, txt_rect)

    def is_clicked(self):
        mouse_pos = pygame.mouse.get_pos()
        mouse_pressed = pygame.mouse.get_pressed()[0]
        return self.rect.collidepoint(mouse_pos) and mouse_pressed

class Player:
    def __init__(self):
        self.image = player_idle
        self.rect = self.image.get_rect(center=(WIDTH // 2, HEIGHT - 100))
        self.speed = 6

    def update(self):
        keys = pygame.key.get_pressed()
        self.image = player_idle
        
        if keys[pygame.K_LEFT] and self.rect.left > 0:
            self.rect.x -= self.speed
            self.image = player_left
        elif keys[pygame.K_RIGHT] and self.rect.right < WIDTH:
            self.rect.x += self.speed
            self.image = player_right

    def draw(self, surface):
        surface.blit(self.image, self.rect)

class Bullet:
    def __init__(self, x, y):
        self.rect = bullet_img.get_rect(center=(x, y))
        self.speed = -10 

    def move(self):
        self.rect.y += self.speed

class Enemy:
    def __init__(self, is_danger_zone):
        self.is_hard = is_danger_zone
        if self.is_hard:
            self.speed_y = random.randint(7, 10)
            self.speed_x = random.choice([-4, 4])
            # Set initial image based on direction
            self.image = enemy_fast_left if self.speed_x < 0 else enemy_fast_right
        else:
            self.image = enemy_normal
            self.speed_y = random.randint(3, 6)
            self.speed_x = 0

        self.rect = self.image.get_rect(topleft=(random.randint(0, WIDTH-40), -50))

    def move(self):
        self.rect.y += self.speed_y
        self.rect.x += self.speed_x
        
        if self.is_hard:
            if self.rect.left <= 0:
                self.speed_x *= -1
                self.image = enemy_fast_right
            elif self.rect.right >= WIDTH:
                self.speed_x *= -1
                self.image = enemy_fast_left

# --- GAME FUNCTIONS ---
async def run_game():
    player = Player()
    bullets = []
    enemies = []
    score = 0
    
    spawn_timer = 0
    shot_timer = 0
    game_running = True
    
    while game_running:
        for event in pygame.event.get():
            if event.type == pygame.QUIT: pygame.quit(); return

        # Danger Zone Logic
        cycle = score % 20
        is_danger = cycle >= 15
        kills_to_escape = 20 - cycle
        
        player.update()
        
        # Shooting
        keys = pygame.key.get_pressed()
        if keys[pygame.K_SPACE] and shot_timer == 0:
            bullets.append(Bullet(player.rect.centerx, player.rect.top))
            shot_timer = 15
        if shot_timer > 0: shot_timer -= 1
        
        # Spawning
        spawn_timer += 1
        threshold = 15 if is_danger else 40
        if spawn_timer > threshold:
            enemies.append(Enemy(is_danger))
            spawn_timer = 0
            
        # Updates
        for b in bullets[:]:
            b.move()
            if b.rect.bottom < 0: bullets.remove(b)
        
        for e in enemies[:]:
            e.move()
            
            # Hit by Bullet
            for b in bullets[:]:
                if e.rect.colliderect(b.rect):
                    score += 1
                    try:
                        enemies.remove(e)
                        bullets.remove(b)
                    except ValueError: pass
                    break
            
            # Hit Player
            if e.rect.colliderect(player.rect):
                game_running = False # GAME OVER
            
            if e.rect.top > HEIGHT: enemies.remove(e)

        # Draw
        if is_danger: screen.fill((50, 0, 0))
        else: screen.fill((20, 20, 40))
        
        player.draw(screen)
        for b in bullets: screen.blit(bullet_img, b.rect)
        for e in enemies: screen.blit(e.image, e.rect)
        
        # UI
        screen.blit(font_md.render(f"Score: {score}", True, "white"), (10, 10))
        
        if is_danger:
            screen.blit(banner_img, banner_img.get_rect(center=(WIDTH//2, 80)))
            esc_txt = font_sm.render(f"SURVIVE! {kills_to_escape} more!", True, "cyan")
            screen.blit(esc_txt, (player.rect.x - 20, player.rect.y + 50))
            
        pygame.display.flip()
        clock.tick(60)
        await asyncio.sleep(0)
    
    return score

async def main_menu():
    btn_play = Button(WIDTH//2 - 100, 500, 200, 80, "PLAY", (0, 200, 100))
    last_score = 0
    
    while True:
        # Draw Background
        screen.blit(background_img, (0, 0))
        
        # Draw Logo
        logo_rect = logo_img.get_rect(center=(WIDTH//2, 200))
        screen.blit(logo_img, logo_rect)
        
        # Draw Last Score (if played)
        if last_score > 0:
            score_txt = font_md.render(f"Last Run: {last_score}", True, "yellow")
            screen.blit(score_txt, (WIDTH//2 - 60, 450))

        btn_play.draw(screen)
        
        if btn_play.is_clicked():
            # Wait a tiny bit so we don't accidentally shoot immediately
            await asyncio.sleep(0.2)
            last_score = await run_game() # Start Game!

        for event in pygame.event.get():
            if event.type == pygame.QUIT: pygame.quit(); return
            
        pygame.display.flip()
        clock.tick(60)
        await asyncio.sleep(0)

# Start the App
asyncio.run(main_menu())