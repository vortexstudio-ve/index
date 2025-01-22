
 /*     // Función de correo 

    // Enviar correo
    const data = { nombre, apellido, correo, telefono };
    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => {
      alert(result.message);
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar el correo');
    });
  });

  const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sebastianrivas712@gmail.com', // Tu correo
    pass: 'D2hackit',       // Tu contraseña (o app password)
  },
});

app.post('/send-email', (req, res) => {
  const { nombre, apellido, correo, telefono } = req.body;

  const mailOptions = {
    from: 'tu_correo@gmail.com',
    to: 'destinatario@correo.com', // Destinatario
    subject: 'Nuevo mensaje del formulario',
    text: `Nombre: ${nombre}\nApellido: ${apellido}\nCorreo: ${correo}\nTeléfono: ${telefono}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el correo' });
    } else {
      res.status(200).json({ message: 'Correo enviado exitosamente' });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});



const btnEnvio = document.getElementById("enviarCorreo");

btnEnvio.addEventListener("click", function (e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const telefono = document.getElementById('telefono').value;

    // URL para Gmail
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=iqsebas420@gmail.com&su=Formulario&body=Nombre:%20${nombre}%0AApellido:%20${apellido}%0ACorreo:%20${correo}%0ATeléfono:%20${telefono}`;
    
    // Abre el enlace en una nueva pestaña
    window.open(gmailLink, '_blank');
});

*/


const btnEnvio = document.getElementById("enviarCorreo");

        btnEnvio.addEventListener("click", function (e) {
            e.preventDefault();

            const nombreProyecto = document.getElementById('nombreProyecto').value;
            const detallesProyecto = document.getElementById('detallesProyecto').value;
            const telefono = document.getElementById('telefono').value;

            const subject = encodeURIComponent("Nuevo Proyecto");
            const body = encodeURIComponent(`Nombre del proyecto: ${nombreProyecto}\nDetalles del proyecto: ${detallesProyecto}\nTeléfono: ${telefono}`);
            const email = "iqsebas4202@gmail.com";

            // URL para Gmail App
            const gmailAppLink = `googlegmail://co?to=${email}&subject=${subject}&body=${body}`;
            // URL para Gmail Web
            const gmailWebLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;

            // Intento de abrir la app de Gmail
            const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            if (isMobile) {
                window.location.href = gmailAppLink;
                setTimeout(() => {
                    // Si no funciona la app, abre Gmail Web
                    window.open(gmailWebLink, '_blank');
                }, 500);
            } else {
                // Si no es móvil, abrir Gmail Web directamente
                window.open(gmailWebLink, '_blank');
            }
        });