# ByteZone Website

Bienvenido al repositorio del proyecto **ByteZone Website**. Esta es una plataforma en línea dedicada a la venta de computadoras. El sitio tiene integración con una API creada en **Node.js** y **Express**, y la funcionalidad de pagos está habilitada utilizando **Stripe** para realizar pagos de prueba.

## Características

- **Vender computadoras:** Los usuarios pueden explorar y comprar computadoras disponibles en la tienda en línea.
- **API en Node.js y Express:** El sitio se conecta con una API backend desarrollada con Node.js y Express para manejar productos, usuarios y pedidos.
- **Integración con Stripe:** Se ha implementado Stripe para procesar pagos de prueba de manera segura en el frontend.

## Instalación

Para poder ejecutar el proyecto localmente, sigue estos pasos:

1. Clona el repositorio:

   ```bash
   git clone https://github.com/WatsiDev/ByteZoneWebSite.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd ByteZoneWebSite
   ```

3. Instala las dependencias necesarias para el frontend (si las hay, Tailwind CSS u otras):

   ```bash
   cd ..
   npm install
   ```

## Uso de Stripe

La integración con Stripe está configurada en modo de prueba. Puedes usar las siguientes tarjetas de prueba de Stripe para realizar pagos:
https://docs.stripe.com/testing?testing-method=card-numbers#cards

- *Tarjeta de crédito válida*:
	-Número de tarjeta: 4242 4242 4242 4242
	-Fecha de vencimiento: cualquier fecha futura.
	-Código de seguridad: cualquier valor de 3 dígitos.