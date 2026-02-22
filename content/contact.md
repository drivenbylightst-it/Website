---
title: "Contattami"
layout: "page"
description: "Compila il form per ricevere una risposta rapida sul tuo progetto."
heroSubtitle: "Driven By Light | Fotografo e Videomaker Automotive Milano Torino"
url: "/contact/"
---

<h2 class="dbl-page-intro">Parliamo del tuo progetto.</h2>

<div class="dbl-card dbl-contact-form-wrap">
<h2 style="margin-bottom:18px;">Richiedi informazioni</h2>
<p class="dbl-muted" style="margin-bottom:20px;">
Compila il form qui sotto. Ti rispondo direttamente via email.
</p>

<form
  id="dbl-contact-form"
  class="dbl-form"
  data-emailjs-public-key="-AUm0rkO4Pswl9mVE"
  data-emailjs-service-id="service_cltz4w2"
  data-emailjs-template-id="template_h7k2ei4"
>

<div class="dbl-form__grid">
<label>
Nome e Cognome
<input type="text" name="from_name" required>
</label>

<label>
Email
<input type="email" name="reply_to" required>
</label>

<label>
Telefono
<input type="text" name="phone">
</label>

<label>
Città
<input type="text" name="city">
</label>
</div>

<label>
Obiettivo del progetto
<select name="service_type">
<option value="Fotografia Automotive">Auto ferme / annunci che non convertono</option>
<option value="Video Cinematic">Migliorare qualità annunci online</option>
<option value="Rolling Shots">Aumentare richieste clienti</option>
<option value="Pacchetto Completo">Consulenza</option>
<option value="Altro (specifica nel messaggio)">Altro (specifica nel messaggio)</option>
</select>
</label>

<label>
Messaggio
<textarea name="message" rows="7" required></textarea>
</label>

<div class="dbl-btn-row dbl-btn-row--center">
<button class="dbl-btn dbl-btn--primary" type="submit">Invia richiesta</button>
</div>

<p id="dbl-contact-status" class="dbl-muted" style="margin-top:14px;text-align:center;"></p>
</form>
</div>
