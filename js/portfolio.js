// Portfolio Data
const portfolioData = {
    wedding: [
        {
            image: 'images/Wedding/Nadia-Nii.jpg',
            title: 'Nadia & Nii\'s Wedding',
            description: 'A beautiful traditional wedding ceremony'
        },
        {
            image: 'images/Wedding/Alice-Derek-Wedding.jpg',
            title: 'Alice & Derek\'s Wedding',
            description: 'Elegant church wedding celebration'
        },
        {
            image: 'images/Wedding/Alice-Derek-Wedding.jpg',
            title: 'Alice & Derek\'s Wedding',
            description: 'Elegant church wedding celebration'
        },
        {
            image: 'images/Wedding/Alice-Derek-Wedding.jpg',
            title: 'Alice & Derek\'s Wedding',
            description: 'Elegant church wedding celebration'
        }
    ],
    birthday: [
        {
            image: 'images/Birthdays/Birthday Adrina.JPG',
            title: 'Adrina\'s Birthday',
            description: 'Colorful birthday celebration'
        },
        {
            image: 'images/Birthdays/Birthday Adrina.JPG',
            title: 'Adrina\'s Birthday',
            description: 'Colorful birthday celebration'
        },
        {
            image: 'images/Birthdays/Birthday Adrina.JPG',
            title: 'Adrina\'s Birthday',
            description: 'Colorful birthday celebration'
        },
        {
            image: 'images/Birthdays/Birthday Adrina.JPG',
            title: 'Adrina\'s Birthday',
            description: 'Colorful birthday celebration'
        }
    ],
    corporate: [
        {
            image: 'images/Corporate/Wanderlust-1.jpeg',
            title: 'Wanderlust Conference',
            description: 'Corporate event photography'
        },
        {
            image: 'images/Corporate/career day 2.jpg',
            title: 'Career Day',
            description: 'Professional corporate event'
        },
        {
            image: 'images/Corporate/Wanderlust-1.jpeg',
            title: 'Wanderlust Conference',
            description: 'Corporate event photography'
        },
        {
            image: 'images/Corporate/career day 2.jpg',
            title: 'Career Day',
            description: 'Professional corporate event'
        }
    ],
    lifestyle: [
        {
            image: 'images/Lifestyle/Amana_AfricanPrint.jpg',
            title: 'African Print Collection',
            description: 'Cultural lifestyle shoot'
        },
        {
            image: 'images/Lifestyle/Holiday vibe.jpg',
            title: 'Holiday Vibe',
            description: 'Seasonal lifestyle photography'
        },
        {
            image: 'images/Lifestyle/Amana_AfricanPrint.jpg',
            title: 'African Print Collection',
            description: 'Cultural lifestyle shoot'
        },
        {
            image: 'images/Lifestyle/Holiday vibe.jpg',
            title: 'Holiday Vibe',
            description: 'Seasonal lifestyle photography'
        }
    ],
    other: [
        {
            image: 'images/Lifestyle/Amana_AfricanPrint.jpg',
            title: 'Special Event',
            description: 'Unique photography session'
        },
        {
            image: 'images/Lifestyle/Holiday vibe.jpg',
            title: 'Special Event',
            description: 'Unique photography session'
        },
        {
            image: 'images/Lifestyle/Amana_AfricanPrint.jpg',
            title: 'Special Event',
            description: 'Unique photography session'
        },
        {
            image: 'images/Lifestyle/Holiday vibe.jpg',
            title: 'Special Event',
            description: 'Unique photography session'
        }
    ]
};

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Portfolio Grid Generation
const grid = document.querySelector('.grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function generatePortfolioItems(category = 'all') {
    grid.innerHTML = '';
    let items = [];

    if (category === 'all') {
        Object.values(portfolioData).forEach(categoryItems => {
            items = [...items, ...categoryItems];
        });
    } else {
        items = portfolioData[category] || [];
    }

    items.forEach((item, index) => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-aos', 'fade-up');
        portfolioItem.setAttribute('data-aos-delay', (index % 4) * 100);

        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        `;

        // Add click event for lightbox
        portfolioItem.addEventListener('click', () => {
            showLightbox(item);
        });

        grid.appendChild(portfolioItem);
    });
}

// Filter Button Functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Generate portfolio items for selected category
        generatePortfolioItems(button.dataset.filter);
    });
});

// Lightbox Functionality
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
document.body.appendChild(lightbox);

function showLightbox(item) {
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <span class="close-lightbox">&times;</span>
            <img src="${item.image}" alt="${item.title}" class="lightbox-image">
            <div class="lightbox-caption">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `;

    lightbox.classList.add('active');

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close lightbox when clicking the close button
    const closeBtn = lightbox.querySelector('.close-lightbox');
    closeBtn.addEventListener('click', closeLightbox);

    // Close lightbox when pressing Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}

function closeLightbox() {
    lightbox.classList.remove('active');
}

// Initialize portfolio with all items
generatePortfolioItems();

document.addEventListener('DOMContentLoaded', function() {
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
    
    // Create lightbox elements
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

    // Function to generate portfolio items
    function generatePortfolioItems(items, showAll = false) {
        const itemsToShow = showAll ? items : items.slice(0, 4);
        return itemsToShow.map(item => `
            <div class="portfolio-item" data-category="${item.category}">
                <img src="${item.image}" alt="${item.description}" data-title="${item.title}" data-description="${item.description}">
                <div class="overlay">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            </div>
        `).join('');
    }

    // Function to filter and display items
    function displayItems(filterValue) {
        const filteredItems = filterValue === 'all' 
            ? portfolioItems 
            : portfolioItems.filter(item => item.category === filterValue);
        
        // Generate initial items (first 4)
        let gridContent = generatePortfolioItems(filteredItems);
        
        // Add view more button if there are more than 4 items
        if (filteredItems.length > 4) {
            gridContent += `
                <button class="view-more-btn" data-filter="${filterValue}">
                    View More
                </button>
            `;
        }

        // Update grid content in one operation
        grid.innerHTML = gridContent;
        grid.setAttribute('data-filter', filterValue);

        // Add click event listeners to portfolio items
        document.querySelectorAll('.portfolio-item').forEach(item => {
            item.addEventListener('click', function() {
                const img = this.querySelector('img');
                const lightboxImg = lightbox.querySelector('.lightbox-image');
                const lightboxTitle = lightbox.querySelector('.lightbox-caption h3');
                const lightboxDesc = lightbox.querySelector('.lightbox-caption p');

                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightboxTitle.textContent = img.dataset.title;
                lightboxDesc.textContent = img.dataset.description;

                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
    }

    // Close lightbox when clicking the close button or outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox || e.target.classList.contains('close-lightbox')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Close lightbox when pressing Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }
    });

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filterValue = this.getAttribute('data-filter');
            displayItems(filterValue);
        });
    });
    
    // Add click event listener to view more button
    grid.addEventListener('click', function(e) {
        if (e.target.classList.contains('view-more-btn')) {
            const filterValue = e.target.getAttribute('data-filter');
            const filteredItems = filterValue === 'all' 
                ? portfolioItems 
                : portfolioItems.filter(item => item.category === filterValue);
            
            // Get current expanded state
            const isExpanded = grid.classList.contains('expanded');
            
            // Set new expanded state before generating content
            grid.classList.toggle('expanded');
            
            // Generate content based on new state
            const newContent = generatePortfolioItems(filteredItems, !isExpanded) + `
                <button class="view-more-btn" data-filter="${filterValue}">
                    ${!isExpanded ? 'View Less' : 'View More'}
                </button>
            `;
            
            // Update grid content
            grid.innerHTML = newContent;
        }
    });

    // Handle window resize
    window.addEventListener('resize', function() {
        const activeFilter = document.querySelector('.filter-btn.active').getAttribute('data-filter');
        displayItems(activeFilter);
    });

    // Initialize with All view
    displayItems('all');
}); 