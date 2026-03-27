// State management for 2D
const state2D = {
    history: [],
    generatedNumbers: 0
};

// State management for 3D
const state3D = {
    history: [],
    generatedNumbers: 0
};

// State management for 4D
const state4D = {
    history: [],
    generatedNumbers: 0
};

// State management for Racik 234D
const stateRacik = {
    as: [],
    kop: [],
    kepala: [],
    ekor: []
};

// DOM elements - 2D
const randomNumberDisplay2D = document.getElementById('randomNumber2D');
const generateBtn2D = document.getElementById('generateBtn2D');
const generateMultipleBtn2D = document.getElementById('generateMultipleBtn2D');
const resetBtn2D = document.getElementById('resetBtn2D');
const historyList2D = document.getElementById('historyList2D');
const totalCountDisplay2D = document.getElementById('totalCount2D');

// DOM elements - 3D
const randomNumberDisplay3D = document.getElementById('randomNumber3D');
const generateBtn3D = document.getElementById('generateBtn3D');
const generateMultipleBtn3D = document.getElementById('generateMultipleBtn3D');
const resetBtn3D = document.getElementById('resetBtn3D');
const historyList3D = document.getElementById('historyList3D');
const totalCountDisplay3D = document.getElementById('totalCount3D');

// DOM elements - 4D
const randomNumberDisplay4D = document.getElementById('randomNumber4D');
const generateBtn4D = document.getElementById('generateBtn4D');
const generateMultipleBtn4D = document.getElementById('generateMultipleBtn4D');
const resetBtn4D = document.getElementById('resetBtn4D');
const historyList4D = document.getElementById('historyList4D');
const totalCountDisplay4D = document.getElementById('totalCount4D');

// DOM elements - Racik 234D
const racikAsDisplay = document.getElementById('racikAs');
const racikKopDisplay = document.getElementById('racikKop');
const racikKepalDisplay = document.getElementById('racikKepala');
const racikEkorDisplay = document.getElementById('racikEkor');
const racikAsInput = document.getElementById('racikAsInput');
const racikKopInput = document.getElementById('racikKopInput');
const racikKepalInput = document.getElementById('racikKepalInput');
const racikEkorInput = document.getElementById('racikEkorInput');
const racikAsGenerateBtn = document.getElementById('racikAsGenerateBtn');
const racikKopGenerateBtn = document.getElementById('racikKopGenerateBtn');
const racikKepalGenerateBtn = document.getElementById('racikKepalGenerateBtn');
const racikEkorGenerateBtn = document.getElementById('racikEkorGenerateBtn');
const racikAsClearBtn = document.getElementById('racikAsClearBtn');
const racikKopClearBtn = document.getElementById('racikKopClearBtn');
const racikKepalClearBtn = document.getElementById('racikKepalClearBtn');
const racikEkorClearBtn = document.getElementById('racikEkorClearBtn');
const racikProcessBtn = document.getElementById('racikProcessBtn');
const racikPasangBtn = document.getElementById('racikPasangBtn');
const racikResult2D = document.getElementById('racikResult2D');
const racikResult3D = document.getElementById('racikResult3D');
const racikResult4D = document.getElementById('racikResult4D');

// DOM elements - Riwayat Bet
const bettingHistoryList = document.getElementById('bettingHistoryList');
const clearBettingHistoryBtn = document.getElementById('clearBettingHistoryBtn');

// DOM elements - Result Tab
const resultDate = document.getElementById('resultDate');
const resultPool = document.getElementById('resultPool');
const resultNumber = document.getElementById('resultNumber');
const saveResultBtn = document.getElementById('saveResultBtn');
const clearResultFormBtn = document.getElementById('clearResultFormBtn');
const resultList = document.getElementById('resultList');
const clearAllResultsBtn = document.getElementById('clearAllResultsBtn');

// Tab buttons
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

// Generate random number with specified digits
function generateRandomNumber(digits) {
    const max = Math.pow(10, digits);
    return Math.floor(Math.random() * max);
}

// Format number to always show specified digits
function formatNumber(num, digits) {
    return String(num).padStart(digits, '0');
}

// Format history string with * separator and # ending
function formatHistoryString(history, digits) {
    if (history.length === 0) {
        return '#';
    }
    const formattedNumbers = history.map(num => formatNumber(num, digits)).join('*');
    return formattedNumbers + '#';
}

// Generate unique random number (tidak duplikat)
function generateUniqueNumber(digits, state) {
    let num;
    do {
        num = generateRandomNumber(digits);
    } while (state.history.includes(num));
    return num;
}

// Display the history in formatted container
function displayFormattedHistory(displayElement, state, digits) {
    displayElement.textContent = formatHistoryString(state.history, digits);
}

// Update history list in UI
function updateHistoryUI(historyElement, state, digits) {
    if (state.history.length === 0) {
        historyElement.innerHTML = '<p class="empty-message">Belum ada riwayat</p>';
    } else {
        historyElement.innerHTML = state.history
            .slice()
            .reverse()
            .map(num => `<span class="history-item">${formatNumber(num, digits)}</span>`)
            .join('');
    }
}

// Update total count
function updateTotalCount(countElement, state) {
    countElement.textContent = state.generatedNumbers;
}

// Generate single number
function generateSingle(state, displayElement, historyElement, countElement, digits, maxNumbers) {
    if (state.history.length >= maxNumbers) {
        alert(`Semua angka sudah dihasilkan! Silakan reset untuk mulai ulang.`);
        return;
    }
    const num = generateUniqueNumber(digits, state);
    state.history.push(num);
    state.generatedNumbers++;
    displayFormattedHistory(displayElement, state, digits);
    updateHistoryUI(historyElement, state, digits);
    updateTotalCount(countElement, state);
}

// Generate multiple numbers
function generateMultiple(state, displayElement, historyElement, countElement, digits, maxNumbers) {
    const count = 5;
    const available = maxNumbers - state.history.length;
    
    if (available <= 0) {
        alert('Semua angka sudah dihasilkan! Silakan reset untuk mulai ulang.');
        return;
    }
    
    const toGenerate = Math.min(count, available);
    
    for (let i = 0; i < toGenerate; i++) {
        const num = generateUniqueNumber(digits, state);
        state.history.push(num);
        state.generatedNumbers++;
    }
    
    if (toGenerate < count) {
        alert(`Hanya bisa generate ${toGenerate} angka (${available} tersisa). Sisa angka sudah semua dihasilkan.`);
    }
    
    displayFormattedHistory(displayElement, state, digits);
    updateHistoryUI(historyElement, state, digits);
    updateTotalCount(countElement, state);
}

// Reset all
function resetAll(state, displayElement, historyElement, countElement, digits) {
    state.history = [];
    state.generatedNumbers = 0;
    displayFormattedHistory(displayElement, state, digits);
    updateHistoryUI(historyElement, state, digits);
    updateTotalCount(countElement, state);
}

// Tab switching
function switchTab(tabName) {
    // Hide all tabs
    tabContents.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from all buttons
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// ===== BETTING HISTORY Functions =====

// Load and display betting history
function loadBettingHistory() {
    const historyData = localStorage.getItem('bettingHistory');
    if (!historyData) {
        bettingHistoryList.innerHTML = '<p class="empty-message">Belum ada riwayat betting</p>';
        return;
    }

    const history = JSON.parse(historyData);
    if (history.length === 0) {
        bettingHistoryList.innerHTML = '<p class="empty-message">Belum ada riwayat betting</p>';
        return;
    }

    bettingHistoryList.innerHTML = history
        .slice()
        .reverse()
        .map((entry, index) => `
            <div class="betting-history-item">
                <div class="betting-history-header">
                    <span class="betting-history-number">#${history.length - index}</span>
                    <span class="betting-history-date">${new Date(entry.timestamp).toLocaleString('id-ID')}</span>
                </div>
                <div class="betting-history-data">
                    <div class="betting-history-bet">${entry.betData}</div>
                </div>
                <div class="betting-history-footer">
                    <span class="betting-history-nominal">💰 Rp ${parseInt(entry.totalNominal).toLocaleString('id-ID')}</span>
                    ${entry.catatan ? `<span class="betting-history-catatan">📝 ${entry.catatan}</span>` : ''}
                    <button class="btn-delete-bet" onclick="deleteBettingEntry(${entry.id})">🗑️</button>
                </div>
            </div>
        `).join('');
}

// Delete betting entry
function deleteBettingEntry(id) {
    if (!confirm('Hapus entry ini?')) return;

    let history = JSON.parse(localStorage.getItem('bettingHistory') || '[]');
    history = history.filter(entry => entry.id !== id);
    
    if (history.length === 0) {
        localStorage.removeItem('bettingHistory');
    } else {
        localStorage.setItem('bettingHistory', JSON.stringify(history));
    }

    loadBettingHistory();
}

// Clear all betting history
function clearAllBettingHistory() {
    if (!confirm('Hapus semua riwayat betting? Tindakan ini tidak dapat dibatalkan!')) return;
    
    localStorage.removeItem('bettingHistory');
    loadBettingHistory();
}

// ===== RESULT CHECKING Functions =====

// Determine result type (2D, 3D, or 4D)
function getResultType(resultStr) {
    const trimmed = resultStr.trim();
    if (!trimmed) return null;
    const len = trimmed.length;
    if (len === 2) return '2D';
    if (len === 3) return '3D';
    if (len === 4) return '4D';
    return null;
}

// Extract digits based on result type
function extractDigits(result, type) {
    const trimmed = result.trim();
    if (type === '2D') return trimmed.slice(-2);
    if (type === '3D') return trimmed.slice(-3);
    if (type === '4D') return trimmed;
    return null;
}

// Check if bet number matches result
function checkBetMatch(betNumbers, resultDigits) {
    const bets = betNumbers.split('*');
    const matches = [];
    
    for (let bet of bets) {
        if (bet === resultDigits) {
            matches.push(bet);
        }
    }
    
    return matches.length > 0 ? matches : null;
}

// ===== RESULT HISTORY Functions =====

// Validate result number input - only allow digits
function validateResultInput(event) {
    const input = event.target;
    // Remove any non-numeric characters
    input.value = input.value.replace(/[^0-9]/g, '');
    // Limit to 4 digits
    if (input.value.length > 4) {
        input.value = input.value.slice(0, 4);
    }
}

// Check if SGP is off on this date (Tuesday=2 or Friday=5)
function isSGPOffDay(dateString) {
    const dateObj = new Date(dateString + 'T00:00:00');
    const dayOfWeek = dateObj.getDay();
    return dayOfWeek === 2 || dayOfWeek === 5; // 2=Tuesday, 5=Friday
}

// Update pool dropdown to show only unavailable pools
function updatePoolOptions() {
    const selectedDate = resultDate.value;
    const resultHistory = JSON.parse(localStorage.getItem('resultHistory') || '[]');
    
    // Get pools already used for this date
    const usedPools = new Set();
    resultHistory.forEach(entry => {
        if (entry.date === selectedDate) {
            usedPools.add(entry.pool);
        }
    });
    
    const allPools = ['Sydney', 'SGP', 'TW', 'HK'];
    // Filter out SGP if it's an off day (Tuesday or Friday)
    let availablePools = allPools.filter(pool => !usedPools.has(pool));
    if (isSGPOffDay(selectedDate)) {
        availablePools = availablePools.filter(pool => pool !== 'SGP');
    }
    
    // Update dropdown options
    resultPool.innerHTML = '<option value="">-- Pilih Pool --</option>';
    
    if (availablePools.length === 0) {
        resultPool.innerHTML += '<option value="" disabled>Semua pool sudah ada</option>';
        resultPool.disabled = true;
    } else {
        availablePools.forEach(pool => {
            const option = document.createElement('option');
            option.value = pool;
            option.textContent = pool;
            resultPool.appendChild(option);
        });
        resultPool.disabled = false;
    }
    
    resultPool.value = '';
}

// Save result to localStorage
function saveResult() {
    const date = resultDate.value.trim();
    const pool = resultPool.value.trim();
    const number = resultNumber.value.trim();

    // Validate inputs
    if (!date || !pool || !number) {
        alert('Silakan isi semua field (Tanggal, Pool, Hasil)!');
        return;
    }

    // Validate result number format (2, 3, or 4 digits)
    if (!/^\d{2,4}$/.test(number)) {
        alert('Hasil harus berupa 2, 3, atau 4 digit angka (contoh: 25, 123, 5678)');
        return;
    }

    // Get existing results
    const resultHistory = JSON.parse(localStorage.getItem('resultHistory') || '[]');
    
    // Create new result entry
    const newResult = {
        id: Date.now(),
        date: date,
        pool: pool,
        number: number,
        timestamp: new Date().toISOString()
    };

    resultHistory.push(newResult);
    localStorage.setItem('resultHistory', JSON.stringify(resultHistory));

    // Clear form and reload display
    clearResultForm(true);
    loadResultHistory();
    alert('✅ Hasil berhasil disimpan!');
}

// Load and display result history (grouped by date)
function loadResultHistory() {
    const resultHistoryData = localStorage.getItem('resultHistory');
    if (!resultHistoryData) {
        resultList.innerHTML = '<p class="empty-message">Belum ada hasil yang dicatat</p>';
        clearAllResultsBtn.style.display = 'none';
        return;
    }

    const history = JSON.parse(resultHistoryData);
    if (history.length === 0) {
        resultList.innerHTML = '<p class="empty-message">Belum ada hasil yang dicatat</p>';
        clearAllResultsBtn.style.display = 'none';
        return;
    }

    // Show button jika ada hasil
    clearAllResultsBtn.style.display = 'block';

    // Group by date
    const groupedByDate = {};
    history.forEach(entry => {
        if (!groupedByDate[entry.date]) {
            groupedByDate[entry.date] = {};
        }
        groupedByDate[entry.date][entry.pool] = entry;
    });

    // Sort dates (newest first)
    const sortedDates = Object.keys(groupedByDate).sort((a, b) => new Date(b) - new Date(a));

    resultList.innerHTML = sortedDates
        .map(date => {
            const dateObj = new Date(date + 'T00:00:00');
            const dayName = dateObj.toLocaleDateString('id-ID', { weekday: 'long' });
            const displayDate = dateObj.toLocaleDateString('id-ID');
            const fullDisplay = `${dayName}, ${displayDate}`;
            const pools = groupedByDate[date];
            const allPools = ['Sydney', 'SGP', 'TW', 'HK'];
            
            return `
                <div class="result-stack-card">
                    <div class="result-stack-header">
                        <span class="result-stack-date">📅 ${fullDisplay}</span>
                    </div>
                    <div class="result-stack-content">
                        ${allPools.map(poolName => {
                            const poolEntry = pools[poolName];
                            // Auto-set SGP to off ("-") on Tuesday and Friday
                            const isSGPOff = poolName === 'SGP' && isSGPOffDay(date);
                            
                            if (poolEntry) {
                                const matchingBets = getMatchingBets(date, poolEntry.number);
                                const jpBadge = matchingBets.length > 0 ? `
                                    <div class="result-pool-jp-badge">� JP</div>
                                    <div class="result-pool-jp-bets">${matchingBets.map(n => `#${n}`).join(', ')}</div>
                                ` : '';
                                
                                return `
                                    <div class="result-pool-item">
                                        <div class="result-pool-name">${poolName}</div>
                                        <div class="result-pool-number">${poolEntry.number}</div>
                                        ${jpBadge}
                                        <button class="result-pool-delete" onclick="deleteResultEntry(${poolEntry.id})" title="Hapus">✕</button>
                                    </div>
                                `;
                            } else if (isSGPOff) {
                                return `
                                    <div class="result-pool-item off">
                                        <div class="result-pool-name">${poolName}</div>
                                        <div class="result-pool-number">-</div>
                                        <span class="result-pool-off-label">Off</span>
                                    </div>
                                `;
                            } else {
                                return `
                                    <div class="result-pool-item empty">
                                        <div class="result-pool-name">${poolName}</div>
                                        <div class="result-pool-number">-</div>
                                    </div>
                                `;
                            }
                        }).join('')}
                    </div>
                </div>
            `;
        }).join('');
}

// Get matching bets for a result number on a specific date
function getMatchingBets(date, resultNumber) {
    const bettingData = localStorage.getItem('bettingHistory');
    if (!bettingData) return [];
    
    try {
        const history = JSON.parse(bettingData);
        
        // Extract 2D, 3D, 4D from result number
        const result2D = resultNumber.slice(-2);  // Last 2 digits
        const result3D = resultNumber.slice(-3);  // Last 3 digits
        const result4D = resultNumber;             // All digits
        
        const matching = [];
        
        history.forEach((entry, index) => {
            // Get LOCAL date from betting timestamp (to match user's local input date)
            const betDateObj = new Date(entry.timestamp);
            const betYear = betDateObj.getFullYear();
            const betMonth = String(betDateObj.getMonth() + 1).padStart(2, '0');
            const betDay = String(betDateObj.getDate()).padStart(2, '0');
            const betDate = `${betYear}-${betMonth}-${betDay}`;
            
            // Check if dates match
            if (betDate === date) {
                // Parse betData format: "28*88#1000+828#2000+2828#1000"
                // Split by '+' to get each type group (2D, 3D, 4D)
                const typeGroups = entry.betData.split('+').map(s => s.trim()).filter(s => s);
                
                let hasMatch = false;
                for (const group of typeGroups) {
                    // Remove nominal part (everything after '#')
                    const numbersOnlyPart = group.split('#')[0];
                    // Split by '*' to get individual numbers
                    const betNumbers = numbersOnlyPart.split('*').map(n => n.trim()).filter(n => n);
                    
                    // Check if any bet number matches result extracts
                    for (const betNum of betNumbers) {
                        if (betNum === result2D || betNum === result3D || betNum === result4D) {
                            hasMatch = true;
                            break;
                        }
                    }
                    if (hasMatch) break;
                }
                
                if (hasMatch) {
                    // Get bet number (reversed index)
                    const betNumber = history.length - index;
                    matching.push(betNumber);
                }
            }
        });
        
        return matching;
    } catch (e) {
        console.error('Error in getMatchingBets:', e, 'betData:', localStorage.getItem('bettingHistory'));
        return [];
    }
}

// Delete result entry
// Delete result entry
function deleteResultEntry(id) {
    if (!confirm('Hapus hasil ini?')) return;

    let history = JSON.parse(localStorage.getItem('resultHistory') || '[]');
    history = history.filter(entry => entry.id !== id);
    
    if (history.length === 0) {
        localStorage.removeItem('resultHistory');
    } else {
        localStorage.setItem('resultHistory', JSON.stringify(history));
    }

    loadResultHistory();
}

// Clear all results
function clearAllResults() {
    if (!confirm('Hapus SEMUA hasil keluaran? Tindakan ini tidak dapat dibatalkan!')) return;
    
    localStorage.removeItem('resultHistory');
    loadResultHistory();
}

// Clear result form
function clearResultForm(silent = false) {
    resultDate.value = '';
    resultPool.value = '';
    resultNumber.value = '';
    if (!silent) {
        alert('Form berhasil direset');
    }
}

// Event listeners for betting history
if (clearBettingHistoryBtn) {
    clearBettingHistoryBtn.addEventListener('click', clearAllBettingHistory);
}

// Load betting history on page load
loadBettingHistory();

// Event listeners - Result Tab
if (saveResultBtn) {
    saveResultBtn.addEventListener('click', saveResult);
}
if (clearResultFormBtn) {
    clearResultFormBtn.addEventListener('click', () => clearResultForm(false));
}
if (resultDate) {
    resultDate.addEventListener('change', updatePoolOptions);
}
if (resultNumber) {
    resultNumber.addEventListener('input', validateResultInput);
}
if (clearAllResultsBtn) {
    clearAllResultsBtn.addEventListener('click', clearAllResults);
}

// Load result history on page load
loadResultHistory();

// Event listeners - 2D
generateBtn2D.addEventListener('click', () => 
    generateSingle(state2D, randomNumberDisplay2D, historyList2D, totalCountDisplay2D, 2, 100)
);
generateMultipleBtn2D.addEventListener('click', () => 
    generateMultiple(state2D, randomNumberDisplay2D, historyList2D, totalCountDisplay2D, 2, 100)
);
resetBtn2D.addEventListener('click', () => 
    resetAll(state2D, randomNumberDisplay2D, historyList2D, totalCountDisplay2D, 2)
);

// Event listeners - 3D
generateBtn3D.addEventListener('click', () => 
    generateSingle(state3D, randomNumberDisplay3D, historyList3D, totalCountDisplay3D, 3, 1000)
);
generateMultipleBtn3D.addEventListener('click', () => 
    generateMultiple(state3D, randomNumberDisplay3D, historyList3D, totalCountDisplay3D, 3, 1000)
);
resetBtn3D.addEventListener('click', () => 
    resetAll(state3D, randomNumberDisplay3D, historyList3D, totalCountDisplay3D, 3)
);

// Event listeners - 4D
generateBtn4D.addEventListener('click', () => 
    generateSingle(state4D, randomNumberDisplay4D, historyList4D, totalCountDisplay4D, 4, 10000)
);
generateMultipleBtn4D.addEventListener('click', () => 
    generateMultiple(state4D, randomNumberDisplay4D, historyList4D, totalCountDisplay4D, 4, 10000)
);
resetBtn4D.addEventListener('click', () => 
    resetAll(state4D, randomNumberDisplay4D, historyList4D, totalCountDisplay4D, 4)
);

// Tab button listeners
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        switchTab(button.getAttribute('data-tab'));
    });
});

// Keyboard shortcut (SPACE to generate on active tab)
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        
        // Check which tab is active
        const activeTabs = Array.from(tabContents).filter(tab => tab.classList.contains('active'));
        
        if (activeTabs.length > 0 && activeTabs[0].id === 'tab-2d') {
            generateSingle(state2D, randomNumberDisplay2D, historyList2D, totalCountDisplay2D, 2, 100);
        } else if (activeTabs.length > 0 && activeTabs[0].id === 'tab-3d') {
            generateSingle(state3D, randomNumberDisplay3D, historyList3D, totalCountDisplay3D, 3, 1000);
        } else if (activeTabs.length > 0 && activeTabs[0].id === 'tab-4d') {
            generateSingle(state4D, randomNumberDisplay4D, historyList4D, totalCountDisplay4D, 4, 10000);
        }
    }
});

// Initialize displays
displayFormattedHistory(randomNumberDisplay2D, state2D, 2);
displayFormattedHistory(randomNumberDisplay3D, state3D, 3);
displayFormattedHistory(randomNumberDisplay4D, state4D, 4);

// ===== RACIK 234D Functions =====

// Generate single digit (0-9) without duplicate
function generateSingleDigit(array) {
    let digit;
    do {
        digit = Math.floor(Math.random() * 10);
    } while (array.includes(digit));
    return digit;
}

// Display racik field
function displayRacikField(display, array) {
    display.textContent = array.join('');
}

// Update racik field from input
function updateRacikFromInput(fieldName, inputValue) {
    // Filter hanya digit 0-9
    const digits = inputValue.replace(/[^0-9]/g, '').split('');
    stateRacik[fieldName] = digits;
    
    const displays = {
        as: racikAsDisplay,
        kop: racikKopDisplay,
        kepala: racikKepalDisplay,
        ekor: racikEkorDisplay
    };
    displayRacikField(displays[fieldName], stateRacik[fieldName]);
    clearRacikResults();
}

// Clear racik field
function clearRacikField(fieldName) {
    stateRacik[fieldName] = [];
    const displays = {
        as: racikAsDisplay,
        kop: racikKopDisplay,
        kepala: racikKepalDisplay,
        ekor: racikEkorDisplay
    };
    const inputs = {
        as: racikAsInput,
        kop: racikKopInput,
        kepala: racikKepalInput,
        ekor: racikEkorInput
    };
    displayRacikField(displays[fieldName], stateRacik[fieldName]);
    inputs[fieldName].value = '';
    clearRacikResults();
}

// Clear racik results
function clearRacikResults() {
    racikResult2D.textContent = '-';
    racikResult3D.textContent = '-';
    racikResult4D.textContent = '-';
    racikPasangBtn.style.display = 'none';
}

// Generate cartesian product (kombinasi semua kemungkinan)
function cartesianProduct(arrays) {
    if (arrays.length === 0) return [];
    if (arrays.length === 1) return arrays[0].map(item => [item]);
    
    const result = [];
    const [first, ...rest] = arrays;
    const subProducts = cartesianProduct(rest);
    
    for (const item of first) {
        for (const subProduct of subProducts) {
            result.push([item, ...subProduct]);
        }
    }
    
    return result;
}

// Process racik and generate 2D, 3D, 4D with all combinations
function processRacik() {
    const as = stateRacik.as;
    const kop = stateRacik.kop;
    const kepala = stateRacik.kepala;
    const ekor = stateRacik.ekor;
    
    let result2D = '-';
    let result3D = '-';
    let result4D = '-';
    let hasResults = false;
    
    // Generate 2D (Kepala + Ekor - all combinations)
    if (kepala.length > 0 && ekor.length > 0) {
        const combinations2D = cartesianProduct([kepala, ekor]);
        result2D = combinations2D.map(combo => combo.join('')).join('*');
        hasResults = true;
    }
    
    // Generate 3D (Kop + Kepala + Ekor - all combinations)
    if (kop.length > 0 && kepala.length > 0 && ekor.length > 0) {
        const combinations3D = cartesianProduct([kop, kepala, ekor]);
        result3D = combinations3D.map(combo => combo.join('')).join('*');
        hasResults = true;
    }
    
    // Generate 4D (As + Kop + Kepala + Ekor - all combinations)
    if (as.length > 0 && kop.length > 0 && kepala.length > 0 && ekor.length > 0) {
        const combinations4D = cartesianProduct([as, kop, kepala, ekor]);
        result4D = combinations4D.map(combo => combo.join('')).join('*');
        hasResults = true;
    }
    
    racikResult2D.textContent = result2D;
    racikResult3D.textContent = result3D;
    racikResult4D.textContent = result4D;
    
    // Show Pasang button if there are results
    if (hasResults) {
        racikPasangBtn.style.display = 'inline-block';
    } else {
        racikPasangBtn.style.display = 'none';
        alert('Silakan isi minimal 2 field untuk generate kombinasi!');
    }
}

// Event listeners - Racik 234D
racikAsGenerateBtn.addEventListener('click', () => {
    if (stateRacik.as.length < 9) {
        const digit = generateSingleDigit(stateRacik.as);
        stateRacik.as.push(digit);
        racikAsInput.value = stateRacik.as.join('');
        displayRacikField(racikAsDisplay, stateRacik.as);
        clearRacikResults();
    } else {
        alert('As sudah mencapai maksimal 9 digit!');
    }
});

racikKopGenerateBtn.addEventListener('click', () => {
    if (stateRacik.kop.length < 9) {
        const digit = generateSingleDigit(stateRacik.kop);
        stateRacik.kop.push(digit);
        racikKopInput.value = stateRacik.kop.join('');
        displayRacikField(racikKopDisplay, stateRacik.kop);
        clearRacikResults();
    } else {
        alert('Kop sudah mencapai maksimal 9 digit!');
    }
});

racikKepalGenerateBtn.addEventListener('click', () => {
    if (stateRacik.kepala.length < 9) {
        const digit = generateSingleDigit(stateRacik.kepala);
        stateRacik.kepala.push(digit);
        racikKepalInput.value = stateRacik.kepala.join('');
        displayRacikField(racikKepalDisplay, stateRacik.kepala);
        clearRacikResults();
    } else {
        alert('Kepala sudah mencapai maksimal 9 digit!');
    }
});

racikEkorGenerateBtn.addEventListener('click', () => {
    if (stateRacik.ekor.length < 9) {
        const digit = generateSingleDigit(stateRacik.ekor);
        stateRacik.ekor.push(digit);
        racikEkorInput.value = stateRacik.ekor.join('');
        displayRacikField(racikEkorDisplay, stateRacik.ekor);
        clearRacikResults();
    } else {
        alert('Ekor sudah mencapai maksimal 9 digit!');
    }
});

racikAsClearBtn.addEventListener('click', () => clearRacikField('as'));
racikKopClearBtn.addEventListener('click', () => clearRacikField('kop'));
racikKepalClearBtn.addEventListener('click', () => clearRacikField('kepala'));
racikEkorClearBtn.addEventListener('click', () => clearRacikField('ekor'));

// Input listeners for manual entry
racikAsInput.addEventListener('change', () => updateRacikFromInput('as', racikAsInput.value));
racikKopInput.addEventListener('change', () => updateRacikFromInput('kop', racikKopInput.value));
racikKepalInput.addEventListener('change', () => updateRacikFromInput('kepala', racikKepalInput.value));
racikEkorInput.addEventListener('change', () => updateRacikFromInput('ekor', racikEkorInput.value));

racikProcessBtn.addEventListener('click', processRacik);

// Pasang button listener - navigate to betting page
racikPasangBtn.addEventListener('click', () => {
    // Get current results
    const result2D = racikResult2D.textContent;
    const result3D = racikResult3D.textContent;
    const result4D = racikResult4D.textContent;
    
    // Prepare data object
    const bettingData = {
        result2D: result2D !== '-' ? result2D : null,
        result3D: result3D !== '-' ? result3D : null,
        result4D: result4D !== '-' ? result4D : null,
        as: stateRacik.as,
        kop: stateRacik.kop,
        kepala: stateRacik.kepala,
        ekor: stateRacik.ekor
    };
    
    // Save to localStorage
    localStorage.setItem('bettingData', JSON.stringify(bettingData));
    
    // Navigate to betting page
    window.location.href = 'halaman-betting.html';
});
