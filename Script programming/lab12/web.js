function calculate() {
    const form_data = {
        name: document.getElementsByName('name')[0].value,
        surname: document.getElementsByName('surname')[0].value,
        number: parseInt(document.getElementsByName('number')[0].value)
    };

    if (isNaN(form_data.number) || form_data.number < 10 || form_data.number > 99) {
        alert('Galima įvesti tik dviženklį skaičių');
        return;
    } else if (form_data.name == 0) {
        alert('Įveskite vardą');
        return;
    } else if (form_data.surname == 0) {
        alert('Įveskite pavardę');
        return;
    }

    const random_num = Math.random() * 10;
    const multiplied_num = Math.round(Math.sqrt(random_num * form_data.number));

    const display_data = `
        Vardas: ${form_data.name}
        Pavardė: ${form_data.surname}
        Pasirinktas skaičius: ${form_data.number}
        Sugeneruotas skaičius: ${random_num}
        ${form_data.name} ${form_data.surname} gavo ${multiplied_num}
    `;

    const display_area = document.getElementById('display');
    display_area.textContent = display_data;

    if (random_num < 3) {
        display_area.innerHTML = display_area.innerHTML.replace(`${random_num}`, `<b>${random_num}</b>`);
    } else if (random_num >= 3 && random_num < 6) {
        display_area.innerHTML = display_area.innerHTML.replace(`${random_num}`, `<u>${random_num}</u>`);
    } else {
        display_area.innerHTML = display_area.innerHTML.replace(`${random_num}`, `<i>${random_num}</i>`);
    }

    console.log(form_data);
    console.log(`Sugeneruotas skaičius: ${random_num}`);
    console.log(`Daugybos rezultatas: ${multiplied_num}`);
}
