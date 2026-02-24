import { useMemo, useState } from "react";
import styled from "styled-components";
import { PageLayout, PageSection } from "../components/PageLayout";

const CONTACT_EMAIL = "info@uniquelyunitedforever.com"; // TODO: update to the correct inbox

const Tabs = styled.div`
  display: inline-flex;
  border-radius: 12px;
  background: #f6f6f6;
  padding: 6px;
  gap: 6px;
`;

const Tab = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 10px;
  padding: 0.55rem 0.85rem;
  font-weight: 700;
  background: ${({ $active }) => ($active ? "#ffffff" : "transparent")};
  box-shadow: ${({ $active }) =>
    $active ? "0 2px 10px rgba(60,60,60,0.10)" : "none"};
`;

const Form = styled.form`
  margin-top: 1.25rem;
  display: grid;
  gap: 1rem;
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.9rem;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.label`
  display: grid;
  gap: 0.35rem;
  font-weight: 700;

  span {
    font-weight: 700;
  }
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 0.7rem 0.75rem;
  font-weight: 500;
`;

const Textarea = styled.textarea`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 0.7rem 0.75rem;
  min-height: 120px;
  resize: vertical;
`;

const RadioGroup = styled.div`
  display: grid;
  gap: 0.5rem;
`;

const RadioRow = styled.label`
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 0.65rem;
  align-items: start;
  padding: 0.75rem;
  border: 1px solid #e8e8e8;
  border-radius: 12px;
  background: #fff;

  strong {
    display: block;
  }
  small {
    display: block;
    color: #666;
    line-height: 1.45;
    margin-top: 0.15rem;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
`;

const Primary = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  font-weight: 800;
  background: #b76e79;
  color: #fff;
  box-shadow: 0 8px 20px rgba(183, 110, 121, 0.22);
`;

const Secondary = styled.a`
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 0.85rem 1rem;
  font-weight: 800;
  text-decoration: none;
  color: #222;
  background: #fff;
`;

function buildMailto({ mode, fields }) {
  const subject =
    mode === "wedding"
      ? "UniquelyUnitedForever Intake - Wedding"
      : "UniquelyUnitedForever Intake - Vow Renewal";

  const lines = [];

  if (mode === "wedding") {
    lines.push("Wedding Intake");
    lines.push("");
    lines.push(`Bride’s full name: ${fields.brideName || ""}`);
    lines.push(`Groom’s full name: ${fields.groomName || ""}`);
    lines.push(`Best Email: ${fields.email || ""}`);
    lines.push(`Phone: ${fields.phone || ""}`);
    lines.push("");
    lines.push(`Wedding Date: ${fields.date || ""}`);
    lines.push(`Time: ${fields.time || ""}`);
    lines.push(`Venue: ${fields.venue || ""}`);
    lines.push("");
    lines.push(`Coordinator: ${fields.coordinatorName || ""}`);
    lines.push(`Coordinator Phone: ${fields.coordinatorPhone || ""}`);
    lines.push(`Photographer: ${fields.photographerName || ""}`);
    lines.push(`Photographer Phone: ${fields.photographerPhone || ""}`);
  } else {
    lines.push("Vow Renewal Intake");
    lines.push("");
    lines.push(`Mr./Mrs.: ${fields.renewalNames || ""}`);
    lines.push(`Venue: ${fields.venue || ""}`);
    lines.push(`Vow Renewal Date: ${fields.date || ""}`);
    lines.push(`Time: ${fields.time || ""}`);
    lines.push(`Phone: ${fields.phone || ""}`);
    lines.push(`Best Email: ${fields.email || ""}`);
  }

  lines.push("");
  lines.push("Ceremony Description");
  lines.push(`Selection: ${fields.ceremonyType || ""}`);
  lines.push("");
  lines.push("Wedding Party Size");
  lines.push(`Selection: ${fields.partySize || ""}`);
  lines.push("");
  lines.push("Comments");
  lines.push(fields.comments || "");

  const body = lines.join("\n");
  return `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

function ContactPage() {
  const [mode, setMode] = useState("wedding");
  const [fields, setFields] = useState({
    brideName: "",
    groomName: "",
    renewalNames: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    venue: "",
    coordinatorName: "",
    coordinatorPhone: "",
    photographerName: "",
    photographerPhone: "",
    ceremonyType: "Traditional (religious)",
    partySize: "Intimate (4 or less in bridal party — rehearsal optional)",
    comments: "",
  });

  const mailto = useMemo(() => buildMailto({ mode, fields }), [mode, fields]);

  function onChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    window.location.href = mailto;
  }

  return (
    <PageLayout
      title="Let’s Get Started"
      subtitle="Send your details — we’ll follow up to confirm availability and next steps."
      narrow
    >
      <PageSection>
        <p>
          My purpose is to assist you in making your wedding journey a total
          success. Use the intake form below and your email app will open with
          everything pre-filled.
        </p>
      </PageSection>

      <Tabs role="tablist" aria-label="Intake type">
        <Tab
          type="button"
          $active={mode === "wedding"}
          aria-selected={mode === "wedding"}
          onClick={() => setMode("wedding")}
        >
          Wedding
        </Tab>
        <Tab
          type="button"
          $active={mode === "renewal"}
          aria-selected={mode === "renewal"}
          onClick={() => setMode("renewal")}
        >
          Vow Renewal
        </Tab>
      </Tabs>

      <Form onSubmit={onSubmit}>
        {mode === "wedding" ? (
          <Grid2>
            <Field>
              <span>Bride’s full name</span>
              <Input name="brideName" value={fields.brideName} onChange={onChange} />
            </Field>
            <Field>
              <span>Groom’s full name</span>
              <Input name="groomName" value={fields.groomName} onChange={onChange} />
            </Field>
          </Grid2>
        ) : (
          <Field>
            <span>Mr./Mrs.</span>
            <Input
              name="renewalNames"
              value={fields.renewalNames}
              onChange={onChange}
              placeholder="e.g., John & Jane Smith"
            />
          </Field>
        )}

        <Grid2>
          <Field>
            <span>Best email</span>
            <Input name="email" value={fields.email} onChange={onChange} type="email" autoComplete="email" required aria-required="true" />
          </Field>
          <Field>
            <span>Phone</span>
            <Input name="phone" value={fields.phone} onChange={onChange} type="tel" autoComplete="tel" required aria-required="true" />
          </Field>
        </Grid2>

        <Grid2>
          <Field>
            <span>Date</span>
            <Input name="date" value={fields.date} onChange={onChange} placeholder="MM/DD/YYYY" required aria-required="true" />
          </Field>
          <Field>
            <span>Time</span>
            <Input name="time" value={fields.time} onChange={onChange} placeholder="e.g., 5:30 PM" required aria-required="true" />
          </Field>
        </Grid2>

        <Field>
          <span>Venue</span>
          <Input name="venue" value={fields.venue} onChange={onChange} required aria-required="true" />
        </Field>

        {mode === "wedding" ? (
          <Grid2>
            <Field>
              <span>Coordinator</span>
              <Input name="coordinatorName" value={fields.coordinatorName} onChange={onChange} autoComplete="name" />
            </Field>
            <Field>
              <span>Coordinator phone</span>
              <Input
                name="coordinatorPhone"
                value={fields.coordinatorPhone}
                onChange={onChange}
                type="tel"
                autoComplete="tel"
              />
            </Field>
          </Grid2>
        ) : null}

        {mode === "wedding" ? (
          <Grid2>
            <Field>
              <span>Photographer</span>
              <Input name="photographerName" value={fields.photographerName} onChange={onChange} autoComplete="name" />
            </Field>
            <Field>
              <span>Photographer phone</span>
              <Input
                name="photographerPhone"
                value={fields.photographerPhone}
                onChange={onChange}
                type="tel"
                autoComplete="tel"
              />
            </Field>
          </Grid2>
        ) : null}

        <div role="group" aria-labelledby="ceremony-description-label">
          <h3 id="ceremony-description-label" style={{ margin: "0 0 0.75rem 0" }}>Ceremony Description</h3>
          <RadioGroup>
            <RadioRow>
              <input
                type="radio"
                name="ceremonyType"
                value="Traditional (religious)"
                checked={fields.ceremonyType === "Traditional (religious)"}
                onChange={onChange}
              />
              <div>
                <strong>Traditional (religious)</strong>
                <small>Scripture, prayer, contemporary wording, overt religious tones.</small>
              </div>
            </RadioRow>

            <RadioRow>
              <input
                type="radio"
                name="ceremonyType"
                value="Non-Denominational (religious)"
                checked={fields.ceremonyType === "Non-Denominational (religious)"}
                onChange={onChange}
              />
              <div>
                <strong>Non-Denominational (religious)</strong>
                <small>Generic prayer, no scripture, contemporary wording.</small>
              </div>
            </RadioRow>

            <RadioRow>
              <input
                type="radio"
                name="ceremonyType"
                value="Civil / Non-Religious"
                checked={fields.ceremonyType === "Civil / Non-Religious"}
                onChange={onChange}
              />
              <div>
                <strong>Civil / Non-Religious</strong>
                <small>No reference to religion, contemporary wording.</small>
              </div>
            </RadioRow>
          </RadioGroup>
        </div>

        <div role="group" aria-labelledby="party-size-label">
          <h3 id="party-size-label" style={{ margin: "0 0 0.75rem 0" }}>Wedding Party Size</h3>
          <RadioGroup>
            <RadioRow>
              <input
                type="radio"
                name="partySize"
                value="Intimate (4 or less in bridal party — rehearsal optional)"
                checked={
                  fields.partySize ===
                  "Intimate (4 or less in bridal party — rehearsal optional)"
                }
                onChange={onChange}
              />
              <div>
                <strong>Intimate</strong>
                <small>4 or less in bridal party • rehearsal optional</small>
              </div>
            </RadioRow>
            <RadioRow>
              <input
                type="radio"
                name="partySize"
                value="Custom (5 or more in bridal party — rehearsal needed)"
                checked={
                  fields.partySize ===
                  "Custom (5 or more in bridal party — rehearsal needed)"
                }
                onChange={onChange}
              />
              <div>
                <strong>Custom</strong>
                <small>5 or more in bridal party • rehearsal needed</small>
              </div>
            </RadioRow>
          </RadioGroup>
        </div>

        <Field>
          <span>Comments</span>
          <Textarea name="comments" value={fields.comments} onChange={onChange} />
        </Field>

        <Actions>
          <Primary type="submit">Open email with intake</Primary>
          <Secondary href={mailto}>Or click here if email didn’t open</Secondary>
        </Actions>

        <p style={{ margin: 0, color: "#666", lineHeight: 1.5 }}>
          Note: update <strong>CONTACT_EMAIL</strong> in{" "}
          <code>src/pages/ContactPage.jsx</code> to the correct inbox.
        </p>
      </Form>
    </PageLayout>
  );
}

export default ContactPage;
