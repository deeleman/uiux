export default async (request, context) => {
  const response = await context.next();
  const page = await response.text();

  const regex = /{{COPYRIGHT_YEAR}}/i;

  const year = new Date().getFullYear();

  const updatedPage = page.replace(regex, year.toString());

  return new Response(updatedPage, response);
};