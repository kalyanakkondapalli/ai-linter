import openai
openai.api_key = "YOUR_OPENAI_API_KEY"

def get_ai_suggestion(lint_output: str) -> str:
    prompt = f"Here is the linter output:\n{lint_output}\nProvide actionable suggestions and reasoning."
    response = openai.Completion.create(
        model="gpt-4",
        prompt=prompt,
        max_tokens=300
    )
    return response.choices[0].text.strip()