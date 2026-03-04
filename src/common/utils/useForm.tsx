import { useState, useEffect } from "react";
import { notification } from "antd";
import emailjs from "@emailjs/browser";

// Inicializar EmailJS con tu PUBLIC_KEY
emailjs.init("B0zD6XfEoGAILCRoV");

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors(validate(values));
    
    // Datos para enviar por email
    const templateParams = {
      name: (values as { name: string }).name || "",
      email: (values as { email: string }).email || "",
      message: (values as { message: string }).message || "",
    };

    // Solo enviar si hay 3 campos completos
    if (Object.keys(values).length === 3) {
      emailjs
        .send(
          "service_mgt08f7", // ID del servicio en EmailJS
          "template_exwtede", // ID del template en EmailJS
          templateParams
        )
        .then(() => {
          console.log("Email enviado exitosamente:", templateParams);
          setShouldSubmit(true);
          setSubmitStatus("success");
        })
        .catch((error) => {
          console.error("Error al enviar email:", error);
          setSubmitStatus("error");
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      setValues("");
      openNotificationWithIcon();
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    submitStatus,
  };
};
