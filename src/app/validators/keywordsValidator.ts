import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function inappropriateKeywords(keywords:string[]):ValidatorFn{
    return (control:AbstractControl):ValidationErrors | null=>{
        const text=control.value as string;
        for(const key of keywords){
            if(text.toLowerCase().includes(key))
                return {inappropriateKeywords:true};
        }
        return null;
    }
}