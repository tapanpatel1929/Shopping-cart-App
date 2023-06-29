import { useForm } from "react-hook-form";
import Dropdown from "../../Components/Dropdown";
import Input from "../../Components/Input";
import Checkbox from "../../Components/Checkbox";
import Radio from "../../Components/Radio";

const wait = (t: number) => new Promise((resolve) => setTimeout(resolve, t));

type Props = {};

const Register = (props: Props) => {
  const {
    register,
    handleSubmit,
    getValues,
    control,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onBlur",
  });

  const onSubmit = async (data) => {
    await wait(5000);
    console.log(data);
  };

  const checkboxOptions = [
    { id: 'Cricket', text: 'cricket' },
    { id: 'volleyball', text: 'volleyball' },
    { id: 'foot-ball', text: 'foot-ball' },
  ];

  return (
    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
      {/* <Select
        control={control}
        name="select"
        rules={{
          required: {
            value: true,
            message: "You have to select One",
          },
        }}
        label="Select"
        id="select"
      /> */}
      <Input
        control = {control}
        name="name"
        rules={{
          required: {
            value: true,
            message: "Name is Required..",
          },
        }}
        label="Name"
        id="name"
        autoComplete="name"
      />
      <Input
        control={control}
        rules={{
          required: {
            value: true,
            message: "Email is Required..",
          },
          pattern: {
            value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            message: "Please Provide valid email address",
          },
        }}
        name="email"
        label="Email"
        id="email"
        type="email"
        autoComplete="email"
      />
      <Input
        control={control}
        name="password"
        rules={{
          required: {
            value: true,
            message: "Password is Required..",
          },
        }}
        label="Password"
        id="password"
        type="password"
        autoComplete="new-password"
      />
      <Dropdown
        control={control}
        name="hobbies"
        rules={{
          required: {
            value: true,
            message: "hobbies is Required..",
          },
        }}
        label="hobbies"
        id="hobbies"
        options={[
          {
            value:'cricket',
            Text:'cricket'
          }
        ]}
      />
      <Radio
        label="Gender"
        items={[
          {
            id: "male",
            text: "Male",
          },
          {
            id: "female",
            text: "Female",
          },
          {
            id: "other",
            text: "Other",
          },
        ]}
        name="gender"
        control={control}
        rules={{
          required: {
            value: true,
            message: "gender is Required..",
          },
        }}
      />
     
{/* const checkboxOptions = [
  { id: 'optionA', text: 'Option A' },
  { id: 'optionB', text: 'Option B' },
  { id: 'optionC', text: 'Option C' },
]; */}

<Checkbox
  label="Checkbox Group"
  items={checkboxOptions}
  name="checkboxGroupName"
  control={control}
  rules={{ required: 'Please select at least one option' }}
/>
      <div>
        <button
          type="submit"
          disabled={isSubmitting || !isValid}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:bg-slate-400 disabled:cursor-wait"
        >
          Sign up
        </button>
      </div>
    </form>
  );
};

export default Register;