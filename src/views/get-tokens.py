#!/usr/bin/env python
# coding: utf-8

# In[2]:


# Given the client ID and tenant ID for an app registered in Azure,
# provide an Azure AD access token and a refresh token.

# If the caller is not already signed in to Azure, the caller's
# web browser will prompt the caller to sign in first.

# pip install msal
from msal import PublicClientApplication
import sys

# You can hard-code the registered app's client ID and tenant ID here,
# or you can provide them as command-line arguments to this script.
client_id = '2b56d192-6bf6-4c92-bc4a-981b8bf78f21'
tenant_id = 'e3183c89-78ae-43e0-b8a3-3eb012e5d9ea'

# Do not modify this variable. It represents the programmatic ID for
# Azure Databricks along with the default scope of '/.default'.
scopes = [ '2ff814a6-3304-4ab8-85cb-cd0e6f879c1d/.default' ]

# Check for too few or too many command-line arguments.
if (len(sys.argv) > 1) and (len(sys.argv) != 3):
    print("Usage: get-tokens.py 2b56d192-6bf6-4c92-bc4a-981b8bf78f21 e3183c89-78ae-43e0-b8a3-3eb012e5d9ea")
    exit(1)

# If the registered app's client ID and tenant ID are provided as
# command-line variables, set them here.
if len(sys.argv) > 1:
    client_id = sys.argv[1]
    tenant_id = sys.argv[2]

app = PublicClientApplication(
  client_id = client_id,
  authority = "https://login.microsoftonline.com/" + tenant_id
)

acquire_tokens_result = app.acquire_token_interactive(
  scopes = scopes
)

if 'error' in acquire_tokens_result:
    print("Error: " + acquire_tokens_result['error'])
    print("Description: " + acquire_tokens_result['error_description'])
else:
    print("Access token:\n")
    print(acquire_tokens_result['access_token'])
    print("\nRefresh token:\n")
    print(acquire_tokens_result['refresh_token'])


# In[ ]:




