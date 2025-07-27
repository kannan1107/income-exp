 let entries = [];
  let editIndex = null;

  const form = document.getElementById('entryForm');
  const descriptionInput = document.getElementById('description');
  const amountInput = document.getElementById('amount');
  const typeInput = document.getElementById('type');
  const entryList = document.getElementById('entryList');
  const balanceEl = document.getElementById('balance');
  const searchInput = document.getElementById('search');
  const filterType = document.getElementById('filterType');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const desc = descriptionInput.value.trim();
    const amt = parseFloat(amountInput.value);
    const type = typeInput.value;

    if (editIndex !== null) {
      entries[editIndex] = { desc, amt, type };
      editIndex = null;
    } else {
      entries.push({ desc, amt, type });
    }

    form.reset();
    renderEntries();
  });

  function renderEntries() {
    const search = searchInput.value.toLowerCase();
    const filter = filterType.value;

    const filtered = entries.filter(entry => {
      return (filter === 'all' || entry.type === filter) &&
             entry.desc.toLowerCase().includes(search);
    });

    entryList.innerHTML = '';
    filtered.forEach((entry, index) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${entry.desc}</td>
        <td class="${entry.type}">${entry.amt.toFixed(2)}</td>
        <td>${entry.type}</td>
        <td>
          <button onclick="editEntry(${index})">Edit</button>
          <button onclick="deleteEntry(${index})">Delete</button>
        </td>
      `;
      entryList.appendChild(row);
    });

    updateBalance();
  }

  function updateBalance() {
    let income = 0, expense = 0;
    for (const e of entries) {
      if (e.type === 'income') income += e.amt;
      else expense += e.amt;
    }
    balanceEl.textContent = (income - expense).toFixed(2);
  }

  function editEntry(index) {
    const entry = entries[index];
    descriptionInput.value = entry.desc;
    amountInput.value = entry.amt;
    typeInput.value = entry.type;
    editIndex = index;
  }

  function deleteEntry(index) {
    entries.splice(index, 1);
    renderEntries();
  }

  searchInput.addEventListener('input', renderEntries);
  filterType.addEventListener('change', renderEntries);

  renderEntries();