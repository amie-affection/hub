// tabs

$('[data-tab-nav] li').on('click', function(ev) {
  ev.preventDefault();
  $([$(this)[0], $($(this).data('href'))[0]]).addClass('active-tab').siblings('.active-tab').removeClass('active-tab');
});

// select

const element = document.querySelectorAll('.select-default');
    element.forEach(item => {
        const example = new Choices(item, {
        }); 
    })

// table

const tableData = [
    {
      name: 'Grand Hotel du Palais Royal',
      supplier: 'Fairmont',
      location: 'Paris, France',
      vibe: 'Sophisticated',
      perks: 'Virtuoso',
      from: '10.5k',
    },
    {
      name: 'Rosewood Little Dix Bay',
      supplier: 'Rosewood',
      location: 'Virgin Gorda, BVI',
      vibe: 'Comfortable Beach',
      perks: 'Virtuoso',
      from: '12.3k',
    },
    {
      name: 'Vila Planinka',
      supplier: 'Fairmont',
      location: 'Paris, France',
      vibe: 'Urban Chic',
      perks: 'Virtuoso',
      from: '9.5k',
    },
    {
      name: 'Fairmont Olympic Hotel',
      supplier: 'Fairmont',
      location: 'Paris, France',
      vibe: 'Business',
      perks: 'Fairmont Plus',
      from: '8.8k',
    },
    {
      name: 'Palmaia - House of AiA',
      supplier: 'Palmaia',
      location: 'Paris, France',
      vibe: 'Party Scene',
      perks: 'Virtuoso',
      from: '8.5k',
    },
    {
      name: 'InterContinental Amstel',
      supplier: 'InterContinental',
      location: 'Amsterdam, Netherlands',
      vibe: 'Boutique',
      perks: 'Virtuoso',
      from: '7.2k',
    },
    {
      name: 'Aman Tokyo',
      supplier: 'Aman',
      location: 'Paris, France',
      vibe: 'Quiet Comfort',
      perks: 'Virtuoso',
      from: '11.8k',
    },
    {
      name: 'Oasy Hotel',
      supplier: 'IHG',
      location: 'London, UK',
      vibe: 'Urban Living',
      perks: 'Virtuoso',
      from: '7.4k',
    },
    {
      name: 'Como Uma Punakha',
      supplier: 'IHG',
      location: 'Mumbai, India',
      vibe: 'Hip/Trendy',
      perks: 'Virtuoso',
      from: '6.3k',
    },
    {
      name: 'Central Private Hotel',
      supplier: 'InterContinental',
      location: 'Rotterdam, Netherlands',
      vibe: 'Busy Urban',
      perks: 'Virtuoso',
      from: '6.5k',
    },
    {
      name: 'Capella Bangkok',
      supplier: 'InterContinental',
      location: 'Bangkok, Thailand',
      vibe: 'Party Scene',
      perks: 'Virtuoso',
      from: '4.7k',
    },
    {
      name: 'The Londoner',
      supplier: 'Fairmont',
      location: 'Bangkok, Thailand',
      vibe: 'Busy Urban',
      perks: 'Virtuoso',
      from: '4.8k',
    },
    {
      name: 'St. Regis Hong Kong',
      supplier: 'Marriott',
      location: 'Hong Kong',
      vibe: 'Party Scene',
      perks: 'Multiple',
      from: '4.1k',
    },
    {
      name: 'Ritz-Carlton, Turks & Caicos',
      supplier: 'Ritz-Carlton',
      location: 'Turks & Caicos',
      vibe: 'Party Scene',
      perks: 'Multiple',
      from: '9.3k',
    },
    {
      name: 'Ritz-Carlton, Aruba',
      supplier: 'Ritz-Carlton',
      location: 'Aruba',
      vibe: 'Party Scene',
      perks: 'Virtuoso',
      from: '8.5k',
    },
    {
      name: 'The Bedford',
      supplier: 'IHG',
      location: 'Coppenhagen',
      vibe: 'Quiet Luxury',
      perks: 'Virtuoso',
      from: '5.1k',
    },
    {
      name: 'Fairmont London',
      supplier: 'Fairmont',
      location: 'London, UK',
      vibe: 'Busy Urban',
      perks: 'Virtuoso',
      from: '6.5k',
    },
  ];
  
  let dataJson = [...tableData];
  
  const listSlider = document.querySelector(".main-page__item");
  
  const sliderFn = ({ name, supplier, location, vibe, perks, from }) => {
    const template = `
      <tr>
        <td>
          <label class="custom-checkbox">
            <input type="checkbox" class="custom-checkbox__input">
            <span class="custom-checkbox__input-fake"></span>
          </label>
        </td>
        <td class="main-page__table-name">${name}</td>
        <td>${supplier}</td>
        <td class="main-page__table__location">${location}</td>
        <td>${vibe}</td>
        <td class="main-page__table__perks">${perks}</td>
        <td>US$ ${from}</td>
        <td>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M4 9.33334V5.33334C4 4.22877 4.89543 3.33334 6 3.33334C7.10457 3.33334 8 4.22877 8 5.33334V10.6667C8 11.7712 8.89543 12.6667 10 12.6667C11.1046 12.6667 12 11.7712 12 10.6667V6.66668" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="10.6667" y="2" width="2.66667" height="4.66667" rx="1.33333" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <rect x="2.66669" y="9.33334" width="2.66667" height="4.66667" rx="1.33333" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10.6667" cy="6.00001" r="0.666667" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M4 7.33333L6.66667 6L9 8L8 9.33333" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M2 11.1667C2.20753 11.2698 2.435 11.3267 2.66667 11.3333C3.19381 11.3444 3.69255 11.095 4 10.6667C4.30745 10.2383 4.80619 9.98894 5.33333 9.99999C5.86047 9.98894 6.35922 10.2383 6.66667 10.6667C6.97412 11.095 7.47286 11.3444 8 11.3333C8.52714 11.3444 9.02588 11.095 9.33333 10.6667C9.64078 10.2383 10.1395 9.98894 10.6667 9.99999C11.1938 9.98894 11.6925 10.2383 12 10.6667C12.3075 11.095 12.8062 11.3444 13.3333 11.3333C13.565 11.3267 13.7925 11.2698 14 11.1667" stroke="#6366F1" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>

          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99998 14.3333C5.97331 14.3333 4.03198 13.8573 2.33331 13.0113L7.99998 2L13.6666 13.0113C11.9052 13.8837 9.96561 14.3362 7.99998 14.3333Z" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.58667 10.5773C4.99332 11.2955 6.55061 11.6689 8.13 11.6667C9.63071 11.6687 11.1125 11.3316 12.4647 10.6807" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.66665 7.33999V7.33333" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7.33333 9.33334V9.32667" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </td>
      </tr>
    `;
    return template;
  };
  
  dataJson.forEach((item) => {
    listSlider.insertAdjacentHTML("beforeend", sliderFn(item));
  });

  // modal

  function initPopup() {
    $(document).on('click', '.modal__content', function(e) {
        e.stopPropagation();
    });
    
    let data_modal = document.querySelectorAll('[data-modal]');
    
    if(data_modal.length > 0){
        for(let i = 0; i < data_modal.length; i++){
            var target;
            data_modal[i].addEventListener('click', (e) =>
            {
                e.preventDefault();
                if(target !== undefined){
                    target.classList.remove('modal--show');
                    $('body').removeClass('lock');
                }
                
                target = document.querySelector(`.modal${data_modal[i].getAttribute('data-modal')}`);
                target.classList.add('modal--show');
                $('body').addClass('lock');
            })
        }
    }

    $(document).on('click', '[data-close-modal], .modal', function(e) {
        e.preventDefault();
        $('.modal').removeClass('modal--show');
        $('body').removeClass('lock');
    });
}
initPopup()

// calendar

$(function() {
  $('input[name="birthday"]').daterangepicker({
    singleDatePicker: true,
    showDropdowns: true,
    minYear: 1901,
    maxYear: parseInt(moment().format('YYYY'),10)
  });
});