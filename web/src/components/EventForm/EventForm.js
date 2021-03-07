import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  CheckboxField,
  Submit,
} from '@redwoodjs/forms';


import {DatePicker} from 'rsuite';
import 'rsuite/dist/styles/rsuite-default.css';

const EventForm = (props) => {
  const [start, setStart] = React.useState(null)
  const [end, setEnd] = React.useState(null)
  console.log(`end is `, end, `start is `, start)
  const onSubmit = (data) => {
    props.onSave({ ...data, start, end }, props?.event?.id)
  }
  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>
        <TextField
          name="title"
          defaultValue={props.event?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="title" className="rw-field-error" />

        <Label
          name="start"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Start time
        </Label>
        {/* <TextField

          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        /> */}

        <DatePicker
          name="start"
          placeholder='Start Date and Time'
          onChange={setStart}
          defaultValue={props.event?.start}
          format="YYYY-MM-DD HH:mm"
          ranges={[
              {
                label: 'Now',
                value: new Date()
              }
            ]}
        />
        <FieldError name="start" className="rw-field-error" />
        <Label
          name="end"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          End time
        </Label>
        <DatePicker
          name="end"
          placeholder='End Date and Time'
          onChange={setEnd}
          defaultValue={props.event?.end}
          format="YYYY-MM-DD HH:mm"
          ranges={[
              {
                label: 'Now',
                value: new Date()
              }
            ]}
        />
        {/* <TextField
          name="end"
          defaultValue={props.event?.end}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        /> */}
        <FieldError name="end" className="rw-field-error" />

        <Label
          name="allDay"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Is all day
        </Label>
        <CheckboxField
          name="allDay"
          defaultChecked={props.event?.allDay}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
        />
        <FieldError name="allDay" className="rw-field-error" />

        <Label
          name="description"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Description
        </Label>
        <TextField
          name="description"
          defaultValue={props.event?.description}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: false }}
        />
        <FieldError name="description" className="rw-field-error" />

        <Label
          name="color_tag"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Color tag
        </Label>
        <TextField
          name="color_tag"
          defaultValue={props.event?.color_tag}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="color_tag" className="rw-field-error" />

        <Label
          name="userId"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          User id
        </Label>
        <TextField
          name="userId"
          defaultValue={props.event?.userId}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="userId" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default EventForm
