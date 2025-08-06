
        // Clean countdown timer
        const ramadanDate = moment('2026-02-17 18:00:00');
        
        function updateCountdown() {
            const now = moment();
            const diff = moment.duration(ramadanDate.diff(now));
            
            // Update time units
            document.getElementById('months').textContent = Math.floor(diff.asMonths()).toString().padStart(2, '0');
            document.getElementById('days').textContent = diff.days().toString().padStart(2, '0');
            document.getElementById('hours').textContent = diff.hours().toString().padStart(2, '0');
            document.getElementById('minutes').textContent = diff.minutes().toString().padStart(2, '0');
            document.getElementById('seconds').textContent = diff.seconds().toString().padStart(2, '0');
            
            // // Update status message
            // document.getElementById('relative-time').innerHTML = 
            //     `Ramadan ${ramadanDate.calendar({
            //         sameDay: '[<span class="highlight">Starts today at sunset</span>]',
            //         nextDay: '[<span class="highlight">Starts tomorrow</span>]',
            //         nextWeek: '[Starts on] dddd',
            //         sameElse: function() {
            //             return `Starts on <span class="highlight">${ramadanDate.format('MMMM D, YYYY')}</span> at sunset`;
            //         }
            //     })}`;
        }
        
        // Initialize and update every second
        updateCountdown();
        setInterval(updateCountdown, 1000);