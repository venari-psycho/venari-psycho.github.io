>>> from segno import helpers
>>> qr = helpers.make_vcard(name='Ventrelli;Arianna', displayname='Dott.ssa Arianna Ventrelli', email=('arianna.ventrelli@psypec.it'), phone=('+39 333 7788681'), url=['https://ariannaventrelli.it'], street=('via degli Anemoni, 8'), city=('Roma'), zipcode=('00172'), country=('Italia'), title=('Psicologa Psicoterapeuta'))
>>> qr.save('av-vcard-light.svg', scale=3, dark='#222222', light='#dddbd7', data_light='#dddbd7', data_dark='#222222')
