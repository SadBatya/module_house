import { Router, Request, Response } from "express";
import nodemailer from "nodemailer";
const router = Router();

router.post("/", async (req: any, res: any) => {
  const { firstName, lastName, telegram, phone } = req.body;

  // // Валидация данных
  // if (!firstName || !lastName || !telegram || !phone) {
  //   return res.status(400).json({ message: "Все поля обязательны" });
  // }

  // Настройка Nodemailer
  const transporter = nodemailer.createTransport({
    service: "smtp.mail.ru",
    port: 465,
    secure: true, // Замените на свой email сервис, если нужно
    auth: {
      user: "sadbatya@mail.ru", // Ваш email
      pass: "4E1itKYxCp4s5hdBvBVu", // Пароль приложения или токен
    },
  });

  try {
    // Отправка письма
    await transporter.sendMail({
      from: '"Форма обратной связи" sadbatya@mail.ru',
      to: "volodya_tru_boy@mail.ru",
      subject: "Новая заявка",
      text: `Имя: ${firstName}\nФамилия: ${lastName}\nTelegram: ${telegram}\nТелефон: ${phone}`,
    });

    res.status(200).json({ message: "Email отправлен успешно!" });
  } catch (error) {
    console.error("Ошибка отправки email:", error);
    res.status(500).json({ message: "Ошибка при отправке email" });
  }
});

export default router;
