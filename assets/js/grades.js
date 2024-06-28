document.addEventListener("DOMContentLoaded", () => {
    function toggleAll(selectAllCheckbox) {
        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            if (checkbox !== selectAllCheckbox) {
                checkbox.checked = selectAllCheckbox.checked;
            }
        });
    }

    document.getElementById('selectAll').addEventListener('change', function() {
        toggleAll(this);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    const addRowBtn = document.getElementById('add-row');
    const form = document.getElementById('grades');
    const outputDiv = document.getElementById('GPA');

    let rowCounter = 1; // Counter for dynamic IDs

    addRowBtn.addEventListener('click', () => {
    rowCounter++;

    // Create a new form group div
    const newFormGroup = document.createElement('div');
    newFormGroup.classList.add('form-group');

    // HTML for new form group
    newFormGroup.innerHTML = `
        <input type="checkbox" class="checkbox" name="course${rowCounter}">
        <input type="text" name="courseName${rowCounter}" placeholder="Course">
        <input type="text" name="grade${rowCounter}" placeholder="Grade" maxlength="3">
        <input type="text" name="credits${rowCounter}" placeholder="Credits" maxlength="2">
        <button type="button" class="remove-row">x</button>
    `;

    // Insert the new form group before the first button
    const buttons = document.getElementById('add-row');
    form.insertBefore(newFormGroup, buttons);

    // Add event listener to remove row button
    const removeBtn = newFormGroup.querySelector('.remove-row');
    removeBtn.addEventListener('click', () => {
        newFormGroup.remove();
    });HW2/assets/js/grades.js
    });

    const gradePoints = {
        'A': 4.0,
        'B+': 3.5,
        'B': 3.0,
        'C+': 2.5,
        'C': 2.0,
        'D': 1.0,
        'F': 0.0
    };

    // Calculate GPA logic
    const calculateBtn = document.getElementById('calculate');
    calculateBtn.addEventListener('click', (event) => {
        event.preventDefault();
    
        let totalGradePoints = 0;
        let totalCredits = 0;
    
        // Get all form groups
        const formGroups = document.querySelectorAll('.form-group');
    
        formGroups.forEach(group => {
            const gradeInput = group.querySelector('input[name^="grade"]');
            const creditsInput = group.querySelector('input[name^="credits"]');
            
            const grade = gradePoints[(gradeInput.value).toUpperCase()];
            const credits = parseInt(creditsInput.value);
    
            if (!isNaN(grade) && !isNaN(credits)) {
            totalGradePoints += grade * credits;
            totalCredits += credits;
            }
        });
  
      // Calculate GPA
      const gpa = totalGradePoints / totalCredits;
      outputDiv.textContent = totalCredits > 0 ? gpa.toFixed(2) : '0.00';
    });
  
    // Reset form
    const resetBtn = document.getElementById('reset');
    resetBtn.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent form submission
  
      const formGroups = document.querySelectorAll('.form-group');
      formGroups.forEach((group, index) => {
        if (index > 0) { // Keep the first form group
          group.remove();
        } else {
          // Clear inputs in the first form group
          group.querySelectorAll('input').forEach(input => input.value = '');
        }
      });
  
      // Clear GPA output
      outputDiv.textContent = '';
    });
});
  

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('Sign-Out').addEventListener('click', () => {
        fetch('/', {
            method: 'GET',
            credentials: 'include'
        })
        .then(response => {
            if (response.ok) {
                window.location.href = '/';
            } else {
                alert('Logout failed');
            }
        });
    });

});