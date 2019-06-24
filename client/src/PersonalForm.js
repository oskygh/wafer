import React from "react";

export default () => (
  <div className="container">
    <h2>Personal Details</h2>
    <form>
      <div className="row form-group">
        <div className="col">
          <label for="surname">Surname</label>
          <input
            type="name"
            className="form-control"
            id="surname"
            placeholder="Enter your surname"
          />
        </div>
        <div className="col">
          <label for="firstName">First Name</label>
          <input
            type="name"
            className="form-control"
            id="firstName"
            placeholder="Enter your first name"
          />
        </div>
      </div>

      <div className="row form-group">
        <div className="col">
          <label for="middleName">Middle Name</label>
          <input
            type="name"
            className="form-control"
            id="middleName"
            placeholder="Enter your middle name"
          />
        </div>
        <div className="col">
          <label for="maidenName">Maiden Name</label>
          <input
            type="name"
            className="form-control"
            id="maidenName"
            placeholder="Enter your maiden name"
          />
        </div>
      </div>

      <div className="row form-group">
        <div className="col">
          <label for="gender-buttons">Gender</label>
          <div id="gender-buttons">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="maleRadioBtn"
                value="male"
              />
              <label class="form-check-label" for="maleRadioBtn">
                Male
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="radio"
                name="gender"
                id="femaleRadioBtn"
                value="female"
              />
              <label class="form-check-label" for="femaleRadioBtn">
                Female
              </label>
            </div>
          </div>
        </div>
        <div className="col">
          <label for="date-of-birth">Date of Birth</label>
          <input type="date" className="form-control" id="date-of-birth" />
        </div>
      </div>

      <div className="row form-group">
        <div className="col">
          <label for="place-of-birth">Place of Birth</label>
          <input
            type="name"
            className="form-control"
            id="place-of-birth"
            placeholder="Enter your town/city of birth"
          />
        </div>
        <div className="col">
          <label for="marital-status">Marital Status</label>
          <div id="marital-status">
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="singleCheckBox"
                value="Single"
              />
              <label class="form-check-label" for="singleCheckBox">
                Single
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="marriedCheckBox"
                value="Married"
              />
              <label class="form-check-label" for="marriedCheckBox">
                Married
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="divorcedCheckBox"
                value="Divorced"
              />
              <label class="form-check-label" for="divorcedCheckBox">
                Divorced
              </label>
            </div>
            <div class="form-check form-check-inline">
              <input
                class="form-check-input"
                type="checkbox"
                id="widowCheckBox"
                value="Widow"
              />
              <label class="form-check-label" for="widowCheckBox">
                Widow
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="form-group">
        <label for="nationality">Nationality</label>
        <input
          type="name"
          id="nationality"
          className="form-control"
          placeholder="Enter your nationality"
        />
      </div>
      <div className="form-group">
        <label for="address">Address</label>
        <textarea
          type="name"
          id="address"
          className="form-control"
          placeholder="Enter your residential address"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);
