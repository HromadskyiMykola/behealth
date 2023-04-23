import { Box, Container, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CustomizedPaper } from "~/components/atomic";
import geekHubLogo from "~/assets/images/geekHubLogo.png";

export function AboutPage() {
  return (
    <Container maxWidth="md">
      <CustomizedPaper sx={{ m: 4 }}>
        <Stack gap={3}>
          <Typography variant="h4" component="h1">
            BeHealth - Медичний портал
          </Typography>

          <Box sx={{ m: 4 }}>
            <Link to="http://geekhub.ck.ua/">
              <img src={geekHubLogo} alt="GeekHub Logo" />
            </Link>
          </Box>

          <Typography variant="body1" paragraph>
            BeHealth - це інноваційний медичний портал, розроблений студентами
            12 сезону навчального курсу на GeekHub. Метою порталу є полегшення
            процесу знаходження лікарів, запису на прийом та отримання
            актуальної інформації про лікування, щоб користувачі могли
            забезпечити своє здоров'я та добробут.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Особливості порталу
          </Typography>

          <Typography variant="body1">
            - <strong>Сучасний дизайн</strong>: Інтуїтивно зрозумілий інтерфейс,
            який робить користування порталом зручним і простим.
          </Typography>

          <Typography variant="body1">
            - <strong>Пошук лікарів та лікарень</strong>: Знайдіть найкращих
            лікарів та лікарень за різними критеріями та відгуками.
          </Typography>

          <Typography variant="body1">
            - <strong>Запис на прийом</strong>: Запишіться на прийом до лікаря
            або вакцинацію безпосередньо через портал BeHealth.
          </Typography>

          <Typography variant="body1">
            - <strong>Календар прийомів</strong>: перегляньте графік прийомів
            лікаря та оберіть зручний для вас час візиту.
          </Typography>

          <Typography variant="body1">
            - <strong>Історія лікування</strong>: Отримайте доступ до своєї
            історії лікування, призначених препаратів та результатів аналізів.
          </Typography>

          <Typography variant="body1" paragraph>
            - <strong>Актуальна інформація</strong>: Завжди будьте в курсі
            останніх новин та рекомендацій щодо лікування та медичних
            препаратів.
          </Typography>

          <Typography variant="h6" gutterBottom>
            Зручність та безпека
          </Typography>

          <Typography variant="body1">
            - <strong>Реєстрація та авторизація</strong>: Створіть акаунт для
            доступу до всіх функцій порталу або увійдіть за допомогою своїх
            акаунтів у соціальних мережах.
          </Typography>

          <Typography variant="body1" paragraph>
            - <strong>Захист персональних даних</strong>: Ваші персональні дані
            надійно захищені від несанкціонованого доступу.
          </Typography>
        </Stack>
      </CustomizedPaper>
    </Container>
  );
}
