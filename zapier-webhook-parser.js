// ============================================================
// Zapier "Code by Zapier" Step — Webhook Payload Parser
// Paste this into a "Run JavaScript" Code step in Zapier.
//
// INPUT: inputData.payload — the raw webhook body (Zapier
//        automatically passes the trigger's raw body here,
//        or map the "Body" field from your Catch Hook trigger
//        to a variable called "payload").
//
// OUTPUT: All fields as individual flat variables available
//         in every downstream Zapier step.
// ============================================================

// Zapier passes trigger data via inputData.
// If your Catch Hook trigger gives you a parsed object already,
// use that directly. If it gives you a raw JSON string, parse it.
let body = inputData.payload;

if (typeof body === 'string') {
  try {
    body = JSON.parse(body);
  } catch (e) {
    throw new Error('Failed to parse webhook payload as JSON: ' + e.message);
  }
}

// ── Safe accessor helpers ──────────────────────────────────
const get = (obj, ...keys) => {
  let cur = obj;
  for (const key of keys) {
    if (cur == null) return '';
    cur = cur[key];
  }
  return cur == null ? '' : cur;
};

// ── Top-level "data" fields ────────────────────────────────
const eventType    = get(body, 'data', 'event_type');   // e.g. "messaging_tollfree.status_update"
const eventId      = get(body, 'data', 'id');            // e.g. "b150f835-0fd9-4561-a88f-02ab45280c49"
const occurredAt   = get(body, 'data', 'occurred_at');  // e.g. "2026-03-26T08:00:53.752+00:00"
const recordType   = get(body, 'data', 'record_type');  // e.g. "event"

// ── Payload fields ─────────────────────────────────────────
const businessName        = get(body, 'data', 'payload', 'business_name');
const payloadId           = get(body, 'data', 'payload', 'id');
const organizationId      = get(body, 'data', 'payload', 'organization_id');
const reason              = get(body, 'data', 'payload', 'reason');
const verificationStatus  = get(body, 'data', 'payload', 'verification_status');
const webhookUrl          = get(body, 'data', 'payload', 'webhook_url');

// ── Phone numbers (array — grab first, plus full list) ─────
const phoneNumbersArray = get(body, 'data', 'payload', 'phone_numbers') || [];
const phoneNumber       = Array.isArray(phoneNumbersArray) && phoneNumbersArray.length > 0
  ? (phoneNumbersArray[0].phone_number || phoneNumbersArray[0])
  : '';
const allPhoneNumbers   = Array.isArray(phoneNumbersArray)
  ? phoneNumbersArray.map(p => p.phone_number || p).join(', ')
  : '';

// ── Meta fields ────────────────────────────────────────────
const metaAttempt     = get(body, 'meta', 'attempt');
const metaDeliveredTo = get(body, 'meta', 'delivered_to');

// ── Return all fields as individual Zapier variables ───────
output = {
  // Data / event
  event_type:           eventType,
  event_id:             eventId,
  occurred_at:          occurredAt,
  record_type:          recordType,

  // Payload
  business_name:        businessName,
  payload_id:           payloadId,
  organization_id:      organizationId,
  reason:               reason,
  verification_status:  verificationStatus,
  webhook_url:          webhookUrl,

  // Phone numbers
  phone_number:         phoneNumber,        // first number only
  all_phone_numbers:    allPhoneNumbers,    // comma-separated if multiple

  // Meta
  meta_attempt:         String(metaAttempt),
  meta_delivered_to:    metaDeliveredTo,
};
