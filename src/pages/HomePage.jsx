import Hero from "../components/Hero"
import Homecards from "../components/Homecards"
import JobListings from "../components/JobListings"
import ViewAllJobs from "../components/ViewAllJobs" 
import { Button,Stack,Form,FormGroup,Checkbox,NumberInput,RadioButton,RadioButtonGroup,FileUploader,Search, SelectItem,Select, TextArea,TextInput } from "@carbon/react";

const HomePage = () => {
  return (
    <>
      <Hero title="Become a React Dev" subtitle="Find the React job that fits your skills and needs" />
      <Homecards />
      <JobListings isHome={true} />
      <div style={{ padding: "2rem" }}>
      <h1>Carbon Design System with Vite</h1>
        <Button kind="primary">Click Me</Button>
      </div>
      <Form aria-label="sample form">
      <Stack gap={7}>
        <FormGroup className="some-class" legendText="Checkbox heading">
          <Checkbox defaultChecked labelText="Checkbox label" id="checkbox-0" />
          <Checkbox labelText="Checkbox label" id="checkbox-1" />
          <Checkbox disabled labelText="Checkbox label" id="checkbox-2" />
        </FormGroup>

        <NumberInput className="some-class" id="number-input-1" label="Number Input" min={0} max={100} value={50} step={10} iconDescription="Add/decrement number" />

        <FormGroup className="some-class" legendText="File Uploader">
          <FileUploader id="file-1" role="button" labelDescription="Max file size is 500 MB. Only .jpg files are supported." buttonLabel="Add file" buttonKind="primary" size="md" filenameStatus="edit" accept={['.jpg', '.png']} multiple={true} disabled={false} iconDescription="Dismiss file" name="" />
        </FormGroup>

        <RadioButtonGroup name="radio-button-group" defaultSelected="default-selected" legendText="Radio Button heading">
          <RadioButton value="standard" id="radio-1" labelText="Standard Radio Button" className="some-class" />
          <RadioButton value="default-selected" labelText="Default Selected Radio Button" id="radio-2" className="some-class" />
          <RadioButton value="blue" labelText="Standard Radio Button" id="radio-3" className="some-class" />
          <RadioButton value="disabled" labelText="Disabled Radio Button" id="radio-4" disabled className="some-class" />
        </RadioButtonGroup>

        <FormGroup className="some-class" legendText="Search">
          <Search className="some-class" size="md" id="search-1" labelText="Search" placeholder="Search" />
        </FormGroup>

        <Select className="some-class" id="select-1" defaultValue="placeholder-item">
          <SelectItem disabled hidden value="placeholder-item" text="Choose an option" />
          <SelectItem value="option-1" text="Option 1" />
          <SelectItem value="option-2" text="Option 2" />
          <SelectItem value="option-3" text="Option 3" />
        </Select>

        <TextInput className="some-class" id="test2" labelText="Text Input label" placeholder="Placeholder text" />

        <TextInput type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" className="some-class" id="test3" labelText="Password" />

        <TextInput type="password" required pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}" className="some-class" id="test4" labelText="Password" invalid invalidText="Your password must be at least 6 characters as well as contain at least one uppercase one lowercase, and one number." />

        <TextArea labelText="Text Area label" className="some-class" placeholder="Placeholder text" id="test5" rows={4} />

        <Button type="submit" className="some-class">
          Submit
        </Button>
      </Stack>
    </Form>;
      <ViewAllJobs />

    </>
  )
}

export default HomePage