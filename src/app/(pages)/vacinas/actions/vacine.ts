"use server";

const  addVacine = async (formData: FormData) => {
    
    const name = formData.get('name') as string;

   console.log(name)
};

export default addVacine;