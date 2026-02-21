---
title: "Contattami"
layout: "page"
description: "Compila il form per ricevere una risposta rapida sul tuo progetto."
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
  data-emailjs-service-id="service_eesi0gp"
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
Tipo di servizio
<select name="service_type">
<option value="Fotografia Automotive">Fotografia Automotive</option>
<option value="Video Cinematic">Video Cinematic</option>
<option value="Rolling Shots">Rolling Shots</option>
<option value="Pacchetto Completo">Pacchetto Completo</option>
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
