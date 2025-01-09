import React from "react";
import "./App.css";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  phone: number;
  telegram: string;
};

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    console.log(data);

    try {
      const response = await fetch("http://localhost:4000/api/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Данные успешно отправлены!");
        // reset(); // Очистить форму после успешной отправки
      } else {
        alert("Произошла ошибка при отправке данных.");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      alert("Произошла ошибка при отправке данных!");
    }
  };

  return (
    <div className="App">
      <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          {...register("name", { required: true, maxLength: 20 })}
        />
        {errors.name && <span>Это поле обязательно к заполнению</span>}

        <input
          type="email"
          name="email"
          placeholder="Ваша почта"
          {...register("email", { required: true })}
        />
        <input
          type="phone"
          name="phone"
          placeholder="Телефон"
          {...register("phone", { required: true })}
        />
        <input
          type="text"
          name="telegram"
          placeholder="Телеграм"
          {...register("telegram", { required: true })}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
