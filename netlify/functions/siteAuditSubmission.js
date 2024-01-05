exports.handler = async function (event, context) {
  const {
    CK_AUDIT_FORM_ID,
    CK_AUDIT_TAG_ID,
    CK_NEWSLETTER_TAG_ID,
    CK_SMB_TAG_ID,
    CK_API_KEY,
  } = process.env;

  try {
    const { email, firstName } = JSON.parse(event.body);

    await fetch(
      `https://api.convertkit.com/v3/forms/${CK_AUDIT_FORM_ID}/subscribe`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify({
          api_key: CK_API_KEY,
          email: email,
          first_name: firstName,
          tags: [CK_AUDIT_TAG_ID, CK_NEWSLETTER_TAG_ID, CK_SMB_TAG_ID],
        }),
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ success: false, error: "Internal Server Error" }),
    };
  }
};
