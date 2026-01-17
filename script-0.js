// Signal Animation
function initSignalAnimations() {
    const digitalCanvas = document.getElementById('digitalCanvas');
    const analogCanvas = document.getElementById('analogCanvas');
    
    if (!digitalCanvas || !analogCanvas) return;

    animateDigital(digitalCanvas);
    animateAnalog(analogCanvas);
}

function resizeCanvas(canvas) {
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;
}

function animateDigital(canvas) {
    const ctx = canvas.getContext('2d');
    let offset = 0;
    
    resizeCanvas(canvas);

    function draw() {
        resizeCanvas(canvas);
        const w = canvas.width;
        const h = canvas.height;
        const mid = h / 2;
        const amp = h * 0.3;
        
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = '#2563eb';
        ctx.lineWidth = 3;
        ctx.beginPath();

        ctx.moveTo(0, mid + amp);
        
        const period = 100; // Width of one pulse cycle
        
        for (let x = 0; x < w + period; x++) {
            // Square wave logic
            const phase = (x + offset) % period;
            const y = phase < period / 2 ? mid - amp : mid + amp;
            
            // Draw vertical lines for transitions
            if (Math.abs(phase - period/2) < 1 || Math.abs(phase) < 1) {
                ctx.lineTo(x, mid - amp);
                ctx.lineTo(x, mid + amp);
            }
            ctx.lineTo(x, y);
        }
        
        ctx.stroke();
        offset -= 1; // Move left
        requestAnimationFrame(draw);
    }
    draw();
}

function animateAnalog(canvas) {
    const ctx = canvas.getContext('2d');
    let offset = 0;
    
    resizeCanvas(canvas);

    function draw() {
        resizeCanvas(canvas);
        const w = canvas.width;
        const h = canvas.height;
        const mid = h / 2;
        const amp = h * 0.35;
        
        ctx.clearRect(0, 0, w, h);
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 3;
        ctx.beginPath();
        
        for (let x = 0; x < w; x++) {
            const y = mid + Math.sin((x + offset) * 0.05) * amp;
            if (x === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        }
        
        ctx.stroke();
        offset -= 1; // Move left
        requestAnimationFrame(draw);
    }
    draw();
}

// Simulation Logic
function initSimulation() {
    const btn = document.getElementById('simButton');
    const led = document.getElementById('simLed');
    const highText = document.querySelector('.chk-high');
    const setOn = document.querySelector('.set-on');
    const setOff = document.querySelector('.set-off');
    
    if (!btn || !led) return;

    function press() {
        led.classList.add('active');
        highText.style.color = '#fff';
        highText.style.fontWeight = 'bold';
        setOn.style.color = '#ef4444';
        setOn.style.textShadow = '0 0 5px #ef4444';
        
        setOff.style.color = '';
        setOff.style.textShadow = '';
    }

    function release() {
        led.classList.remove('active');
        highText.style.color = '';
        highText.style.fontWeight = '';
        setOn.style.color = '';
        setOn.style.textShadow = '';
        
        setOff.style.color = '#64748b'; // Dimmed
    }

    btn.addEventListener('mousedown', press);
    btn.addEventListener('mouseup', release);
    btn.addEventListener('mouseleave', release);
    
    // Touch support for mobile
    btn.addEventListener('touchstart', (e) => { e.preventDefault(); press(); });
    btn.addEventListener('touchend', (e) => { e.preventDefault(); release(); });
}

// Init
document.addEventListener('DOMContentLoaded', () => {
    initSignalAnimations();
    initSimulation();
});
