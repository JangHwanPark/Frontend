import {FormSchema} from "@/app/form/_type/formDataTypes";
import {Control, FieldValues, UseFormRegister} from "react-hook-form";
import FormFieldRenderer from "@/app/form/_components/FormFieldRenderer";

interface RowRendererProps<T extends FieldValues> {
  rowFields: (FormSchema)[];
  control: Control<T>;
  register: UseFormRegister<T>;
  division?: "select" | "stacks";
}

const FormRowRenderer = <T extends FieldValues,>({ rowFields, control, register, division }: RowRendererProps<T>) => {
  return (
      <div className="w-full flex flex-col sm:flex-row sm:gap-5">
        {rowFields.map((rowField, index) => (
            <FormFieldRenderer
                key={index}
                field={rowField}
                control={control}
                register={register}
                division={division}
            />
        ))}
      </div>
  );
};

export default FormRowRenderer;