<div class="trm-contacts-creator">
  <form #form="ngForm" (ngSubmit)="save(form.value)" novalidate>
    <md-card>
      <md-card-title-group>
        <img md-card-md-image alt="Placeholder image" src="/assets/images/placeholder.png">
        <md-card-title></md-card-title>
        <md-card-subtitle></md-card-subtitle>
      </md-card-title-group>
      <md-card-content>
        <div fxLayout="column">
          <!-- opgelet: de color moet tussen single quotes teruggegeven worden! -->
          <md-input-container fxFlex [dividerColor]="name.errors ? 'warn' : 'primary'" >
          <!-- https://angular.io/docs/ts/latest/guide/forms.html -->
          <!-- name="name" | Each input element has a name property that is required by Angular forms to register the control with the form. -->
          <!-- #name="ngModel" | is een reference variable die je nodig hebt om te gebruiken in md-hint enzo.
               We need a template reference variable to access the input box's Angular control from within the template. 
               Here we created a variable called name and gave it the value "ngModel".
               Why "ngModel"? A directive's exportAs property tells Angular how to link the reference variable to the directive. 
               We set name to ngModel because the ngModel directive's exportAs property happens to be "ngModel". -->
          <!-- in de thoughtram eindoplossing doen ze het trouwens op een heel andere manier... -->
            <input md-input placeholder="Name" name="name" #name="ngModel" ngModel required minlength="3">
            <md-hint align="end" *ngIf="!name.valid && !name.pristine">
              <template [ngIf]="name.errors?.required">Gelieve een naam in te vullen</template>
              <template [ngIf]="name.errors?.minlength">De naam moet minimum {{name.errors.minlength.requiredLength}} tekens lang zijn, maar was {{name.errors.minlength.actualLength}}</template>
            </md-hint>
            <!-- in de thoughtram eindoplossing doen ze het in 1 md-hint met template tags... -->
            <!--<md-hint align="end" *ngIf="!name.valid && !name.pristine && name.errors.required">
              Gelieve een naam in te vullen
            </md-hint>
            <md-hint align="end" *ngIf="!name.valid && !name.pristine && name.errors.minlength">
              De naam moet minimum {{name.errors.minlength.requiredLength}} tekens lang zijn, maar was {{name.errors.minlength.actualLength}}
            </md-hint>-->
          </md-input-container>
          <md-input-container fxFlex [dividerColor]="email.errors ? 'accent' : 'primary'" >
            <!-- moet overeenkomen met de selectors in de @Directive, dus het benodigde attribute is hier niet de function, maar de selector -->
            <!-- bij gebruik van template blijkt errors? toch nog nodig te zijn, ongeacht er al een *ngIf rond staat die al op valid checkt -->
            <input md-input placeholder="Email" name="email" #email="ngModel" ngModel trmValidateEmail trmEmailAvailabilityValidator>
            <md-hint align="end" *ngIf="!email.valid && !email.pristine">
              <template [ngIf]="email.errors?.validateEmail">Gelieve een geldig e-mailadres in te vullen</template>
              <template [ngIf]="email.errors?.emailTaken">Dit e-mailadres is reeds in gebruik</template>
            </md-hint>
          </md-input-container>
          <md-input-container fxFlex>
            <input md-input placeholder="Birthday" name="birthday" type="date" ngModel>
          </md-input-container>
          <md-input-container fxFlex>
            <input md-input placeholder="Phone" name="phone" ngModel>
          </md-input-container>
          <md-input-container fxFlex>
            <input md-input placeholder="Website" name="website" ngModel>
          </md-input-container>
          <fieldset fxLayout="column" ngModelGroup="address">
            <legend>Address</legend>
            <md-input-container fxFlex>
              <input md-input placeholder="Street" name="street" ngModel>
            </md-input-container>
            <md-input-container fxFlex>
              <input md-input placeholder="Zip" name="zip" ngModel>
            </md-input-container>
            <md-input-container fxFlex>
              <input md-input placeholder="City" name="city" ngModel>
            </md-input-container>
          </fieldset>
        </div>
      </md-card-content>
      <md-card-actions fxLayout fxLayoutAlign="center center">
        <button md-button type="submit" [disabled]="!form.valid">Save</button>
        <a md-button title="Cancel creating new contact">Cancel</a>
      </md-card-actions>
    </md-card>
  </form>
</div>