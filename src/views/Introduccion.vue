<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido(data-aos="fade-right")
      .titulo-principal__numero
        span
          i.fas.fa-info.text-white 
      h1 Introducción

    .row.align-items-center.justify-content-center
      .col-lg-2.mb-3
        figure
          img.img-t(src='@/assets/curso/tema1/img2.png').mx-auto(data-aos="fade-right").mx-auto
      .col-lg-10
        p.mb-5 El <em>buyer</em> persona es un perfil semificticio que simboliza al cliente ideal de una marca porque es construido con base en información demográfica y social de distintos clientes actuales de la empresa, para concretar la personalidad de ese cliente ideal. Tener bien identificados a los <em>buyer</em> persona ayuda toda estrategia de mercadeo digital para segmentar los clientes y conocerlos mejor. Lo invitamos a ver el siguiente video para conocer la temática que se abordará en el presente componente formativo.
    .row.justify-content-center.bg1
      .col-lg-12
        figure.p-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/wy5koRkNKYM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          
           
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
