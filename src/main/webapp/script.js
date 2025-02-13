// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

window.onload = function() {
  this.loadSchool();
}

/**
 * Loads list of schools.
 */
function loadSchool() {
  fetch('/school').then(response => response.json()).then((schools) => {
    const schoolListElement = document.getElementById('dd_school');
    schools.forEach((school) => {
      schoolListElement.appendChild(createSchoolElement(school));
    })
  });
}

/** Creates an element that links to a school's directory page. */
function createSchoolElement(school) {
  const schoolElement = document.createElement('a');
  schoolElement.innerText = school.name;
  schoolElement.setAttribute("href", `/directory-page/directory.html?school_id=${school.id}`)
  schoolElement.style.textAlign = 'left';
  return schoolElement;
}
