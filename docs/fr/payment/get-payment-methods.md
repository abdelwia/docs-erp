### <span style="color:green">GET</span>  Méthodes de Paiement

````
BASE_URL/v1/misc/payin/services
````

## EN-TÊTES

| Autorisation | Jeton de base |
| ------------- | ----------- |



## Exemple de Requête

```curl


curl --location 'BASE_URL/v1/misc/payin/services' \
--header 'Authorization: Jeton de base'

```

## Exemple de Réponse

::: details Corps  

```json


{
  "code": 200,
  "message": "OK",
  "data": {
    "BJ": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Carte de crédit",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Bénin",
          "code": "BJ",
          "prefix": "+229"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "MOOV_BJ",
        "display_name": "Moov Mobile Money Bénin",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Bénin",
          "code": "BJ",
          "prefix": "+229"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "MTN_BJ",
        "display_name": "Moov Mobile Money Bénin",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Bénin",
          "code": "BJ",
          "prefix": "+229"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      }
    ],
    "BF": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Carte de crédit",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Burkina Faso",
          "code": "BF",
          "prefix": "+226"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "ORANGE_BF",
        "display_name": "Orange Mobile Money Burkina Faso",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Burkina Faso",
          "code": "BF",
          "prefix": "+226"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "MOOV_BF",
        "display_name": "Moov Mobile Money Burkina Faso",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Burkina Faso",
          "code": "BF",
          "prefix": "+226"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      }
    ],
    "CI": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Carte de crédit",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Côte d'Ivoire",
          "code": "CI",
          "prefix": "+225"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "MOOV_CI",
        "display_name": "Moov Mobile Money Côte d'Ivoire",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Côte d'Ivoire",
          "code": "CI",
          "prefix": "+225"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "MTN_CI",
        "display_name": "MTN Mobile Money Côte d'Ivoire",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Côte d'Ivoire",
          "code": "CI",
          "prefix": "+225"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "ORANGE_CI",
        "display_name": "Orange Mobile Money Côte d'Ivoire",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Côte d'Ivoire",
          "code": "

CI",
          "prefix": "+225"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      }
    ],
    "CM": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Carte de crédit",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Cameroun",
          "code": "CM",
          "prefix": "+237"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "MTN_CM",
        "display_name": "MTN Mobile Money Cameroun",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Cameroun",
          "code": "CM",
          "prefix": "+237"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "ORANGE_CM",
        "display_name": "Orange Mobile Money Cameroun",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Cameroun",
          "code": "CM",
          "prefix": "+237"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      }
    ],
    "ML": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Carte de crédit",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Mali",
          "code": "ML",
          "prefix": "+223"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "MOOV_ML",
        "display_name": "Moov Mobile Money Mali",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Mali",
          "code": "ML",
          "prefix": "+223"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "ORANGE_ML",
        "display_name": "Orange Mobile Money Mali",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Mali",
          "code": "ML",
          "prefix": "+223"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      }
    ],
    "SN": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Carte de crédit",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Sénégal",
          "code": "SN",
          "prefix": "+221"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name

": "FREE_SN",
        "display_name": "Free Mobile Money Sénégal",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Sénégal",
          "code": "SN",
          "prefix": "+221"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "ORANGE_SN",
        "display_name": "Orange Mobile Money Sénégal",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Sénégal",
          "code": "SN",
          "prefix": "+221"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      }
    ],
    "TG": [
      {
        "name": "CREDIT_CARD",
        "display_name": "Carte de crédit",
        "channel": "credit_card",
        "type": "direct",
        "country": {
          "name": "Togo",
          "code": "TG",
          "prefix": "+228"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "MOOV_TG",
        "display_name": "Moov Mobile Money Togo",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Togo",
          "code": "TG",
          "prefix": "+228"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      },
      {
        "name": "TMONEY_TG",
        "display_name": "T-Money Mobile Money Togo",
        "channel": "mobile_money",
        "type": "direct",
        "country": {
          "name": "Togo",
          "code": "TG",
          "prefix": "+228"
        },
        "meta": {
          "otp": false,
          "otp_length": 0,
          "redirect_customer_to_url_processing": false,
          "before_payment_instructions": "Assurez-vous d'avoir suffisamment de solde.",
          "after_payment_instructions": "Vérifiez votre compte pour les détails de la transaction."
        }
      }
    ]
  }
}

```


:::


::: details En-têtes (12)

 *Serveur*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      nginx/1.25.1 

 *Type de Contenu*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;   application/json


 *Encodage de Transfert*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;      chunked

 *Connexion*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  keep-alive
 
 *Variation*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Accept-Encoding



 *X-Alimenté-Par*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  PHP/8.2.7


 *Contrôle de Cache*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; no-cache, private

 
 *Date*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  Lun, 26 Jun 2023 19:54:39 GMT
 

  *Taux de Limitation X*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  600

  *Restant de Limitation X*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  599

*Accès-Control-Allow-Origin*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  *


*Encodage de Contenu*    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  gzip

  
 



:::

