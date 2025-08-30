from setuptools import setup, find_packages

setup(
    name="ai-linter",
    version="0.1.0",
    packages=find_packages(),
    install_requires=["openai", "pylint"],
    entry_points={
        "console_scripts": ["ai-linter=ai_linter.linter:lint_file"]
    },
)