document.addEventListener('DOMContentLoaded', function () {
    // Portfolio Items
    const portfolioItems = [
        // Wedding Category
        {
            category: 'wedding',
            image: 'images/Wedding/Nadia-Nii.jpg',
            title: 'Wedding Photography',
            description: 'Nadia & Nii\'s Wedding'
        },
        {
            category: 'wedding',
            image: 'images/Wedding/Alice-Derek-Wedding.jpg',
            title: 'Wedding Photography',
            description: 'Alice & Derek\'s Wedding'
        },
        {
            category: 'wedding',
            image: 'images/Wedding/Nana-Kwame-Anitas wedding.png',
            title: 'Wedding Photography',
            description: 'Nana & Kwame\'s Wedding'
        },
        {
            category: 'wedding',
            image: 'images/Wedding/Wedding_1.jpg',
            title: 'Wedding Photography',
            description: 'Wedding Ceremony'
        },
        {
            category: 'wedding',
            image: 'images/Wedding/Wedding_2.jpg',
            title: 'Wedding Photography',
            description: 'Wedding Reception'
        },
        {
            category: 'wedding',
            image: 'images/Wedding/Wedding_3.jpg',
            title: 'Wedding Photography',
            description: 'Wedding Party'
        },

        // Birthday Category
        {
            category: 'birthday',
            image: 'images/Birthdays/Birthday Adrina.JPG',
            title: 'Birthday Celebration',
            description: 'Adrina\'s Birthday Party'
        },
        {
            category: 'birthday',
            image: 'images/Birthdays/Birthday Pearl.JPG',
            title: 'Birthday Celebration',
            description: 'Pearl\'s Birthday Party'
        },
        {
            category: 'birthday',
            image: 'images/Birthdays/Birthday Kid.jpg',
            title: 'Birthday Celebration',
            description: 'Kids Birthday Party'
        },
        {
            category: 'birthday',
            image: 'images/Birthdays/Birthday Katty.jpg',
            title: 'Birthday Celebration',
            description: 'Katty\'s Birthday Party'
        },
        {
            category: 'birthday',
            image: 'images/Birthdays/Birthday Couples.webp',
            title: 'Birthday Celebration',
            description: 'Couples\'s Birthday Party'
        },
        {
            category: 'birthday',
            image: 'images/Birthdays/Bithday Micky.JPG',
            title: 'Birthday Celebration',
            description: 'Micky\'s Birthday Party'
        },

        // Corporate Category
        {
            category: 'corporate',
            image: 'images/Corporate/Wanderlust-1.jpeg',
            title: 'Corporate Event',
            description: 'Wanderlust Conference'
        },
        {
            category: 'corporate',
            image: 'images/Corporate/Afrochella_1.jpeg',
            title: 'Corporate Event',
            description: 'Afrochella Festival'
        },
        {
            category: 'corporate',
            image: 'images/Corporate/career day 2.jpg',
            title: 'Corporate Event',
            description: 'Career Day Event'
        },
        {
            category: 'corporate',
            image: 'images/Corporate/KFC game.jpg',
            title: 'Corporate Event',
            description: 'KFC Game Day'
        },
        {
            category: 'corporate',
            image: 'images/Corporate/Soad Cut.jpg',
            title: 'Corporate Event',
            description: 'Business Conference'
        },
        {
            category: 'corporate',
            image: 'images/Corporate/Career day.png',
            title: 'Corporate Event',
            description: 'Team Building'
        },

        // Lifestyle Category
        {
            category: 'lifestyle',
            image: 'images/Lifestyle/Amana_AfricanPrint.jpg',
            title: 'Lifestyle Shoot',
            description: 'African Print Collection'
        },
        {
            category: 'lifestyle',
            image: 'images/Lifestyle/Holidays_in.webp',
            title: 'Lifestyle Shoot',
            description: 'Holiday Collection'
        },
        {
            category: 'lifestyle',
            image: 'images/Lifestyle/Traditional-African-Mundi.png',
            title: 'Lifestyle Shoot',
            description: 'Traditional African Collection'
        },
        {
            category: 'lifestyle',
            image: 'images/Lifestyle/Holiday vibe.jpg',
            title: 'Lifestyle Shoot',
            description: 'Holiday Vibe Collection'
        },
        {
            category: 'lifestyle',
            image: 'images/Lifestyle/lifestyle_1.jpg',
            title: 'Lifestyle Shoot',
            description: 'Urban Collection'
        },
        {
            category: 'lifestyle',
            image: 'images/Lifestyle/lifestyle_2.jpg',
            title: 'Lifestyle Shoot',
            description: 'Casual Collection'
        },

        // Other Category
        {
            category: 'other',
            image: 'images/Other/Wli-waterfall.jpeg',
            title: 'Nature Photography',
            description: 'Wli Waterfall'
        },
        {
            category: 'other',
            image: 'images/Other/Lake.png',
            title: 'Nature Photography',
            description: 'Lake View'
        },
        {
            category: 'other',
            image: 'images/Other/kokrobite-beach.jpg',
            title: 'Nature Photography',
            description: 'Kokrobite Beach'
        },
        {
            category: 'other',
            image: 'images/Other/accra-market.webp',
            title: 'Street Photography',
            description: 'Accra Market'
        },
        {
            category: 'other',
            image: 'images/Other/hana beach 2.jpg',
            title: 'Nature Photography',
            description: 'Hana Beach'
        },
        {
            category: 'other',
            image: 'images/Other/GHana beach.jpg',
            title: 'Nature Photography',
            description: 'Ghana Beach'
        }
    ];

    const filterButtons = document.querySelectorAll('.filter-btn');
    const grid = document.querySelector('.grid');

    // Create Lightbox Once
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img src="" alt="" class="lightbox-image">
            <div class="lightbox-caption">
                <h3></h3>
                <p></p>
            </div>
        </div>
    `;
    document.body.appendChild(lightbox);

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    // Close lightbox on click outside or on close button or escape button
    lightbox.addEventListener('click', e => {
        if (e.target === lightbox || e.target.classList.contains('close-lightbox')) closeLightbox();
    });
    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) closeLightbox();
    });

    function generatePortfolioItems(items, showAll = false, filterValue = 'all') {
        const itemsToShow = showAll ? items : items.slice(0, 4);
        let html = itemsToShow.map(item => `
            <div class="portfolio-item" data-category="${item.category}" data-aos="fade-up">
                <img src="${item.image}" alt="${item.description}" data-title="${item.title}" data-description="${item.description}">
                <div class="overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    
        if (items.length > 4) {
            html += `<button class="view-more-btn" data-filter="${filterValue}">${showAll ? 'View Less' : 'View More'}</button>`;
        }
    
        grid.innerHTML = html;
    
        // Activate lightbox
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('click', function () {
                const img = this.querySelector('img');
                lightbox.querySelector('.lightbox-image').src = img.src;
                lightbox.querySelector('.lightbox-caption h3').textContent = img.dataset.title;
                lightbox.querySelector('.lightbox-caption p').textContent = img.dataset.description;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
    
        AOS.refresh();
    }
    

    // Filter Items by Category
    function displayItems(filterValue) {
        const filtered = filterValue === 'all'
            ? portfolioItems
            : portfolioItems.filter(item => item.category === filterValue);

        generatePortfolioItems(filtered, false, filterValue);
    }

    // Filter Button Events
    filterButtons.forEach(button => {
        button.addEventListener('click', function () {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            const filterValue = this.getAttribute('data-filter');
            displayItems(filterValue);
        });
    });

    // View More / View Less Button
    grid.addEventListener('click', e => {
        if (e.target.classList.contains('view-more-btn')) {
            const filterValue = e.target.getAttribute('data-filter');
            const isExpanded = grid.classList.contains('expanded');
            const filtered = filterValue === 'all'
                ? portfolioItems
                : portfolioItems.filter(item => item.category === filterValue);

            generatePortfolioItems(filtered, !isExpanded, filterValue);
            grid.classList.toggle('expanded');
        }
    });

    // Initial Display
    displayItems('all');
    document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');

    // Handle Window Resize
    window.addEventListener('resize', () => {
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        displayItems(activeFilter);
    });

    // AOS Init
    AOS.init({
        duration: 1000,
        once: true
    });
});
