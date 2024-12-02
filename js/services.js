// CONSTANTS
const SRC_HAIR = "img/services/healthy-curly-hair-woman-long-blonde-hairstyle-fem-2023-11-27-05-20-14-utc-min.jpg"
const SRC_NAIL_DESIGN = "img/services/nail-artist-doing-neat-manicure-2024-07-04-02-06-03-utc-min.jpg";
const SRC_EYEBROWS = "img/services/Screenshot 2024-12-02 at 9.19.05 AM-min.png"
const SRC_EYELASH_EXTENSIONS = "img/services/adult-woman-having-eyelash-extension-in-profession-2023-11-27-04-52-23-utc-min.JPG"
const SRC_MAINTENANCE = "img/services/nails-spa-2024-05-22-17-39-08-utc-min.JPG"
const SRC_AESTHETICS = "img/services/beauty-master-applies-a-rejuvenating-mask-to-the-c-2024-08-05-22-20-39-utc-min.jpg"
const SRC_MASSAGE = "img/services/massaging-the-body-and-mind-shot-of-a-beautiful-y-2023-11-27-05-28-38-utc-min.jpg"
const SRC_WAXING = "img/services/depilação-min.png"
const SRC_MAKEUP = "img/services/maquiagem-min.png"

const STR_HAIR = ["CORTE FEMININO (ESCOVA INCLUSA)", "CORTE MASCULINO", "ESCOVA", "COLORAÇÃO", "RETOQUE DE RAÍZ", "BOTOX CAPILAR", "ESCOVA PROGRESSIVA", "MECHAS", "CAUTERIZAÇÃO CAPILAR",
    "RESTAURAÇÃO COM QUERATINA A FRIO", "PENTEADOS", "HIDRATAÇÃO IMEDIATA", "REGENERAÇÃO 3D INFUSION", "HIDRATAÇÃO E RECONSTRUÇÃO JOICO", "ESCOVA DEFINITIVA", "MEGA HAIR"
]
const PRICE_HAIR = ["R$ 100,00", "R$ 45,00", "R$ 60,00", "R$ 110,00", "R$ 110,00", "R$ 190,00", "R$ 350,00", "R$ 480,00", "R$ 99,00", "R$ 129,00", "R$ 100,00",
    "R$ 89,00", "R$ 109,00", "R$ 129,00", "R$ 460,00", "R$ 90,00"
   ]

const STR_NAIL_DESIGN = ["MÃO TRADICIONAL (SEM DECORAÇÃO)", "ALONGAMENTO C/ CULTIL. E ESMALTAÇÃO", "MANUTENÇÃO CULTIL. E ESMALTAÇÃO", "ALONGAMENTO COM CUTILAGEM", "MANUTENÇÃO (CUTILAGEM)", "BLINDAGEM COM ESMALTAÇÃO", "ESMALTAÇÃO EM GEL (SEM DECORAÇÃO)", "PÉ TRADICIONAL (SEM DECORAÇÃO)", "PÉ ESMALTAÇÃO (SEM DECORAÇÃO)", "SPA DOS PÉS", "REMOÇÃO DE CALOSIDADE"]
const PRICE_NAIL_DESIGN = ["R$ 35,00", "R$ 220,00", "R$ 180,00", "R$ 190,00", "R$ 145,00", "R$ 160,00", "R$ 95,00", "R$ 40,00", "R$ 100,00", "R$ 70,00", "R$ 20,00"]
const OBS_NAIL_DESING = "Os valores das decorações variam de acordo com o tamanho,material e complexidade da decoração. Para saber o valor exato de uma decoração, entre em contato com a profissional"

const STR_EYEBROWS = ["LIMPEZA DE MICRO", "DESIGN PERSONALIZADO", "DESIGN COM HENNA", "BUÇO COM FIO EGÍPCIO", "DEPILAÇÃO FACIAL", "BROW LAMINATION", "DESIGN COM TINTURA"]
const PRICE_EYEBROWS = ["R$ 25,00", "R$ 40,00", "R$ 50,00", "R$ 15,00", "R$ 50,00", "R$ 140,00", "R$ 50,00"]

const STR_EYELASH_EXTENSIONS = ["CLÁSSICO FIO A FIO", "VOLUME RUSSO", "CAPPING (NÃO PRECISA DE MANUTENÇÃO", "VOLUME RUSSO", "MEGA VOLUME"]
const PRICE_EYELASH_EXTENSIONS = ["R$ 180,00", "R$ 180,00", "R$ 180,00", "R$ 150,00", "R$ 200,00", "R$ 200,00"]

const STR_MAINTENANCE = ["ESMALTAÇÃO EM GEL (SEM DECORAÇÃO)", "PÉ TRADICIONAL (SEM DECORAÇÃO)", "PÉ ESMALTAÇÃO (SEM DECORAÇÃO)", "SPA DOS PÉS", "REMOÇÃO DE CALOSIDADE"]
const PRICE_MAINTENANCE = ["R$ 80,00", "R$ 35,00", "R$ 90,00", "R$ 70,00", "R$ 20,00"]

const STR_AESTHETICS = ["LIMPEZA DE PELE", "LIMPEZA DE PELE COM PEELING", "HIDRATAÇÃO E TRAT. DE REJUVENESCIMENTO", "MICROAGULHAMENTO", "RENOVAR A"]
const PRICE_AESTHETICS = ["R$ 130,00", "R$ 160,00", "R$ 120,00", "R$ 350,00", "R$ 150,00"]
const OBS_AESTHETICS = "Aproveite os descontos de 10 a 30% nos planos de tratamento estético. Consulte a profissional para saber mais."

const STR_MASSAGE = ["MASSAGEM", "DRENAGEM LINFÁTICA", "DRY NEEDLING", "VENTOSATERAPIA"]
const PRICE_MASSAGE = ["R$ 80,00", "R$ 80,00", "R$ 70,00", "R$ 80,00"]

const STR_WAXING = ["BUÇO", "AXILAS", "VIRILHA", "MEIA PERNA", "PERNA INTEIRA", "DEPILAÇÃO COMPLETA"]
const PRICE_WAXING = ["R$ 20,00", "R$ 35,00", "R$ 65,00", "R$ 38,00", "R$ 65,00", "R$ 150,00"]

const STR_MAKEUP = ["MAQUIAGEM PROFISSIONAL", "MAQUIAGEM TEMATICA"]
const PRICE_MAKEUP = ["R$ 180,00", "R$ 230,00"]

$(function(){
    function getUrlParams(search) {
        const params = new URLSearchParams(search);
        return params.has('service') ? params.get('service') : null;

    }
    function createServiceList(arr_options, arr_price) {
        let service_list = ""
        for (let index = 0; index < arr_options.length; index++) {
            const option = arr_options[index];
            const price = arr_price[index];
            if (service == "hair" || service == "waxing" || service == "makeup"){
                service_list += `<li><div class=\"srv-container\"><h3 class=\"srv-option\">${option}</h3> <h3 class=\"srv-price\">${price}</h3></div></li>`

            } else{
                service_list += `<li><div class=\"srv-container\"><h3 class=\"srv-option\">${option}</h3> <h3 class=\"srv-price\">${price}</h3></div></li>`
            }
            
        }
        return service_list;
    }
    const service = getUrlParams(window.location.search);
    switch(service) {
        case 'hair':
            $(".srv_from").show();
            $('#common_img-img').attr('src', SRC_HAIR);
            $('#common_title').text("Cabelo & Cia");
            $('.common_list').append(createServiceList(STR_HAIR, PRICE_HAIR));

            break;
        case 'naildesign':
            $(".srv_from").show();
            $('#common_img-img').attr('src', SRC_NAIL_DESIGN);
            $('#common_title').text("Cabelo & Cia");
            $('.common_list').append(createServiceList(STR_HAIR, PRICE_HAIR));

        default:
            break;
    }

});