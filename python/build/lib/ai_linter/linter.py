import subprocess
from .ai_suggester import get_ai_suggestion

def lint_file(file_path):
    result = subprocess.run(['pylint', file_path], capture_output=True, text=True)
    print("Pylint output:\n", result.stdout)
    ai_feedback = get_ai_suggestion(result.stdout)
    print("\nAI Suggestions:\n", ai_feedback)