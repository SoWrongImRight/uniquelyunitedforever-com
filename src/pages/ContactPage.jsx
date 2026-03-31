import { useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { PageLayout, PageSection } from "../components/PageLayout";

const CONTACT_EMAIL = "info@uniquelyunitedforever.com";

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

const TabPanel = styled.div`
  margin-top: 1rem;
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

const Fieldset = styled.fieldset`
  border: none;
  padding: 0;
  margin: 0;

  legend {
    font-weight: 700;
    margin-bottom: 0.75rem;
  }
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
  min-width: 44px;
  min-height: 44px;
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
  const weddingTabRef = useRef(null);
  const renewalTabRef = useRef(null);
  const minDate = new Date().toISOString().split("T")[0];
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

  function focusTab(nextMode) {
    if (nextMode === "wedding") {
      weddingTabRef.current?.focus();
    } else {
      renewalTabRef.current?.focus();
    }
  }

  function onChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    window.location.href = mailto;
  }

  function onTabsKeyDown(e) {
    if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
      e.preventDefault();
      const nextMode = mode === "wedding" ? "renewal" : "wedding";
      setMode(nextMode);
      focusTab(nextMode);
    }

    if (e.key === "Home") {
      e.preventDefault();
      setMode("wedding");
      focusTab("wedding");
    }

    if (e.key === "End") {
      e.preventDefault();
      setMode("renewal");
      focusTab("renewal");
    }
  }

  return (
    <PageLayout
      title="Let's Get Started"
      subtitle="Send your details — we’ll follow up to confirm availability and next steps."
      metaDescription="Contact Uniquely United Forever to plan your wedding or vow renewal. Share your details and get next steps."
      canonicalPath="/contact"
      narrow
    >
      <PageSection>
        <p style={{ fontStyle: "italic", color: "#555", textAlign: "center" }}>
          "Your ceremony deserves the same care as your relationship." — Rev. Miller
        </p>
      </PageSection>

      <PageSection>
        <p>
          My purpose is to assist you in making your wedding journey a total
          success. Use the intake form below and your email app will open with
          everything pre-filled.
        </p>
      </PageSection>

      <Tabs role="tablist" aria-label="Intake type" onKeyDown={onTabsKeyDown}>
        <Tab
          type="button"
          ref={weddingTabRef}
          role="tab"
          id="intake-tab-wedding"
          aria-controls="intake-panel-wedding"
          $active={mode === "wedding"}
          aria-selected={mode === "wedding"}
          tabIndex={mode === "wedding" ? 0 : -1}
          onClick={() => setMode("wedding")}
        >
          Wedding
        </Tab>
        <Tab
          type="button"
          ref={renewalTabRef}
          role="tab"
          id="intake-tab-renewal"
          aria-controls="intake-panel-renewal"
          $active={mode === "renewal"}
          aria-selected={mode === "renewal"}
          tabIndex={mode === "renewal" ? 0 : -1}
          onClick={() => setMode("renewal")}
        >
          Vow Renewal
        </Tab>
      </Tabs>

      <Form onSubmit={onSubmit}>
        <TabPanel
          role="tabpanel"
          id="intake-panel-wedding"
          aria-labelledby="intake-tab-wedding"
          hidden={mode !== "wedding"}
        >
          <Grid2>
            <Field htmlFor="field-bride-name">
              <span id="field-bride-name-label">Bride’s full name</span>
              <Input
                id="field-bride-name"
                name="brideName"
                aria-labelledby="field-bride-name-label"
                value={fields.brideName}
                onChange={onChange}
              />
            </Field>
            <Field htmlFor="field-groom-name">
              <span id="field-groom-name-label">Groom’s full name</span>
              <Input
                id="field-groom-name"
                name="groomName"
                aria-labelledby="field-groom-name-label"
                value={fields.groomName}
                onChange={onChange}
              />
            </Field>
          </Grid2>
        </TabPanel>

        <TabPanel
          role="tabpanel"
          id="intake-panel-renewal"
          aria-labelledby="intake-tab-renewal"
          hidden={mode !== "renewal"}
        >
          <Field htmlFor="field-renewal-names">
            <span id="field-renewal-names-label">Mr./Mrs.</span>
            <Input
              id="field-renewal-names"
              name="renewalNames"
              aria-labelledby="field-renewal-names-label"
              value={fields.renewalNames}
              onChange={onChange}
              placeholder="e.g., John & Jane Smith"
            />
          </Field>
        </TabPanel>

        <Grid2>
          <Field htmlFor="field-email">
            <span id="field-email-label">Best email</span>
            <Input
              id="field-email"
              name="email"
              aria-labelledby="field-email-label"
              value={fields.email}
              onChange={onChange}
              type="email"
              autoComplete="email"
              required
              aria-required="true"
            />
          </Field>
          <Field htmlFor="field-phone">
            <span id="field-phone-label">Phone</span>
            <Input
              id="field-phone"
              name="phone"
              aria-labelledby="field-phone-label"
              value={fields.phone}
              onChange={onChange}
              type="tel"
              autoComplete="tel"
              required
              aria-required="true"
            />
          </Field>
        </Grid2>

        <Grid2>
          <Field htmlFor="field-date">
            <span id="field-date-label">Date</span>
            <Input
              id="field-date"
              name="date"
              aria-labelledby="field-date-label"
              value={fields.date}
              onChange={onChange}
              type="date"
              min={minDate}
              required
              aria-required="true"
            />
          </Field>
          <Field htmlFor="field-time">
            <span id="field-time-label">Time</span>
            <Input
              id="field-time"
              name="time"
              aria-labelledby="field-time-label"
              value={fields.time}
              onChange={onChange}
              type="time"
              required
              aria-required="true"
            />
          </Field>
        </Grid2>

        <Field htmlFor="field-venue">
          <span id="field-venue-label">Venue</span>
          <Input
            id="field-venue"
            name="venue"
            aria-labelledby="field-venue-label"
            value={fields.venue}
            onChange={onChange}
            required
            aria-required="true"
          />
        </Field>

        {mode === "wedding" ? (
          <Grid2>
            <Field htmlFor="field-coordinator-name">
              <span id="field-coordinator-name-label">Coordinator</span>
              <Input
                id="field-coordinator-name"
                name="coordinatorName"
                aria-labelledby="field-coordinator-name-label"
                value={fields.coordinatorName}
                onChange={onChange}
                autoComplete="name"
              />
            </Field>
            <Field htmlFor="field-coordinator-phone">
              <span id="field-coordinator-phone-label">Coordinator phone</span>
              <Input
                id="field-coordinator-phone"
                name="coordinatorPhone"
                aria-labelledby="field-coordinator-phone-label"
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
            <Field htmlFor="field-photographer-name">
              <span id="field-photographer-name-label">Photographer</span>
              <Input
                id="field-photographer-name"
                name="photographerName"
                aria-labelledby="field-photographer-name-label"
                value={fields.photographerName}
                onChange={onChange}
                autoComplete="name"
              />
            </Field>
            <Field htmlFor="field-photographer-phone">
              <span id="field-photographer-phone-label">Photographer phone</span>
              <Input
                id="field-photographer-phone"
                name="photographerPhone"
                aria-labelledby="field-photographer-phone-label"
                value={fields.photographerPhone}
                onChange={onChange}
                type="tel"
                autoComplete="tel"
              />
            </Field>
          </Grid2>
        ) : null}

        <Fieldset>
          <legend id="ceremony-description-label">Ceremony Description</legend>
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
        </Fieldset>

        <Fieldset>
          <legend id="party-size-label">Wedding Party Size</legend>
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
        </Fieldset>

        <Field htmlFor="field-comments">
          <span id="field-comments-label">Comments</span>
          <Textarea
            id="field-comments"
            name="comments"
            aria-labelledby="field-comments-label"
            value={fields.comments}
            onChange={onChange}
          />
        </Field>

        <Actions>
          <Primary type="submit">Open email with intake</Primary>
          <Secondary
            href={mailto}
            role="button"
            aria-label="Open email if button did not work"
          >
            Or click here if email didn’t open
          </Secondary>
        </Actions>
      </Form>
    </PageLayout>
  );
}

export default ContactPage;
