// <auto-generated>
/*
 * OpenAPI Petstore
 *
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * The version of the OpenAPI document: 1.0.0
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */

#nullable enable

using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Text.Json;
using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
using OpenAPIClientUtils = Org.OpenAPITools.Client.ClientUtils;

namespace Org.OpenAPITools.Model
{
    /// <summary>
    /// EnumArrays
    /// </summary>
    public partial class EnumArrays : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EnumArrays" /> class.
        /// </summary>
        /// <param name="arrayEnum">arrayEnum</param>
        /// <param name="justSymbol">justSymbol</param>
        [JsonConstructor]
        public EnumArrays(List<EnumArrays.ArrayEnumEnum> arrayEnum, JustSymbolEnum justSymbol)
        {
            ArrayEnum = arrayEnum;
            JustSymbol = justSymbol;
            OnCreated();
        }

        partial void OnCreated();

        /// <summary>
        /// Defines ArrayEnum
        /// </summary>
        public enum ArrayEnumEnum
        {
            /// <summary>
            /// Enum Fish for value: fish
            /// </summary>
            Fish = 1,

            /// <summary>
            /// Enum Crab for value: crab
            /// </summary>
            Crab = 2
        }

        /// <summary>
        /// Returns a <see cref="ArrayEnumEnum"/>
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public static ArrayEnumEnum ArrayEnumEnumFromString(string value)
        {
            if (value == "fish")
                return ArrayEnumEnum.Fish;

            if (value == "crab")
                return ArrayEnumEnum.Crab;

            throw new NotImplementedException($"Could not convert value to type ArrayEnumEnum: '{value}'");
        }

        /// <summary>
        /// Returns a <see cref="ArrayEnumEnum"/>
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static ArrayEnumEnum? ArrayEnumEnumFromStringOrDefault(string value)
        {
            if (value == "fish")
                return ArrayEnumEnum.Fish;

            if (value == "crab")
                return ArrayEnumEnum.Crab;

            return null;
        }

        /// <summary>
        /// Converts the <see cref="ArrayEnumEnum"/> to the json value
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public static string ArrayEnumEnumToJsonValue(ArrayEnumEnum value)
        {
            if (value == ArrayEnumEnum.Fish)
                return "fish";

            if (value == ArrayEnumEnum.Crab)
                return "crab";

            throw new NotImplementedException($"Value could not be handled: '{value}'");
        }

        /// <summary>
        /// Defines JustSymbol
        /// </summary>
        public enum JustSymbolEnum
        {
            /// <summary>
            /// Enum GreaterThanOrEqualTo for value: &gt;&#x3D;
            /// </summary>
            GreaterThanOrEqualTo = 1,

            /// <summary>
            /// Enum Dollar for value: $
            /// </summary>
            Dollar = 2
        }

        /// <summary>
        /// Returns a <see cref="JustSymbolEnum"/>
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public static JustSymbolEnum JustSymbolEnumFromString(string value)
        {
            if (value == ">=")
                return JustSymbolEnum.GreaterThanOrEqualTo;

            if (value == "$")
                return JustSymbolEnum.Dollar;

            throw new NotImplementedException($"Could not convert value to type JustSymbolEnum: '{value}'");
        }

        /// <summary>
        /// Returns a <see cref="JustSymbolEnum"/>
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        public static JustSymbolEnum? JustSymbolEnumFromStringOrDefault(string value)
        {
            if (value == ">=")
                return JustSymbolEnum.GreaterThanOrEqualTo;

            if (value == "$")
                return JustSymbolEnum.Dollar;

            return null;
        }

        /// <summary>
        /// Converts the <see cref="JustSymbolEnum"/> to the json value
        /// </summary>
        /// <param name="value"></param>
        /// <returns></returns>
        /// <exception cref="NotImplementedException"></exception>
        public static string JustSymbolEnumToJsonValue(JustSymbolEnum value)
        {
            if (value == JustSymbolEnum.GreaterThanOrEqualTo)
                return ">=";

            if (value == JustSymbolEnum.Dollar)
                return "$";

            throw new NotImplementedException($"Value could not be handled: '{value}'");
        }

        /// <summary>
        /// Gets or Sets JustSymbol
        /// </summary>
        [JsonPropertyName("just_symbol")]
        public JustSymbolEnum JustSymbol { get; set; }

        /// <summary>
        /// Gets or Sets ArrayEnum
        /// </summary>
        [JsonPropertyName("array_enum")]
        public List<EnumArrays.ArrayEnumEnum> ArrayEnum { get; set; }

        /// <summary>
        /// Gets or Sets additional properties
        /// </summary>
        [JsonExtensionData]
        public Dictionary<string, JsonElement> AdditionalProperties { get; } = new Dictionary<string, JsonElement>();

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class EnumArrays {\n");
            sb.Append("  ArrayEnum: ").Append(ArrayEnum).Append("\n");
            sb.Append("  JustSymbol: ").Append(JustSymbol).Append("\n");
            sb.Append("  AdditionalProperties: ").Append(AdditionalProperties).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

    /// <summary>
    /// A Json converter for type <see cref="EnumArrays" />
    /// </summary>
    public class EnumArraysJsonConverter : JsonConverter<EnumArrays>
    {
        /// <summary>
        /// Deserializes json to <see cref="EnumArrays" />
        /// </summary>
        /// <param name="utf8JsonReader"></param>
        /// <param name="typeToConvert"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <returns></returns>
        /// <exception cref="JsonException"></exception>
        public override EnumArrays Read(ref Utf8JsonReader utf8JsonReader, Type typeToConvert, JsonSerializerOptions jsonSerializerOptions)
        {
            int currentDepth = utf8JsonReader.CurrentDepth;

            if (utf8JsonReader.TokenType != JsonTokenType.StartObject && utf8JsonReader.TokenType != JsonTokenType.StartArray)
                throw new JsonException();

            JsonTokenType startingTokenType = utf8JsonReader.TokenType;

            List<EnumArrays.ArrayEnumEnum>? arrayEnum = default;
            EnumArrays.JustSymbolEnum? justSymbol = default;

            while (utf8JsonReader.Read())
            {
                if (startingTokenType == JsonTokenType.StartObject && utf8JsonReader.TokenType == JsonTokenType.EndObject && currentDepth == utf8JsonReader.CurrentDepth)
                    break;

                if (startingTokenType == JsonTokenType.StartArray && utf8JsonReader.TokenType == JsonTokenType.EndArray && currentDepth == utf8JsonReader.CurrentDepth)
                    break;

                if (utf8JsonReader.TokenType == JsonTokenType.PropertyName && currentDepth == utf8JsonReader.CurrentDepth - 1)
                {
                    string? localVarJsonPropertyName = utf8JsonReader.GetString();
                    utf8JsonReader.Read();

                    switch (localVarJsonPropertyName)
                    {
                        case "array_enum":
                            if (utf8JsonReader.TokenType != JsonTokenType.Null)
                                arrayEnum = JsonSerializer.Deserialize<List<EnumArrays.ArrayEnumEnum>>(ref utf8JsonReader, jsonSerializerOptions);
                            break;
                        case "just_symbol":
                            string? justSymbolRawValue = utf8JsonReader.GetString();
                            justSymbol = justSymbolRawValue == null
                                ? null
                                : EnumArrays.JustSymbolEnumFromStringOrDefault(justSymbolRawValue);
                            break;
                        default:
                            break;
                    }
                }
            }

            if (arrayEnum == null)
                throw new ArgumentNullException(nameof(arrayEnum), "Property is required for class EnumArrays.");

            if (justSymbol == null)
                throw new ArgumentNullException(nameof(justSymbol), "Property is required for class EnumArrays.");

            return new EnumArrays(arrayEnum, justSymbol.Value);
        }

        /// <summary>
        /// Serializes a <see cref="EnumArrays" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="enumArrays"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public override void Write(Utf8JsonWriter writer, EnumArrays enumArrays, JsonSerializerOptions jsonSerializerOptions)
        {
            writer.WriteStartObject();

            WriteProperties(ref writer, enumArrays, jsonSerializerOptions);
            writer.WriteEndObject();
        }

        /// <summary>
        /// Serializes the properties of <see cref="EnumArrays" />
        /// </summary>
        /// <param name="writer"></param>
        /// <param name="enumArrays"></param>
        /// <param name="jsonSerializerOptions"></param>
        /// <exception cref="NotImplementedException"></exception>
        public void WriteProperties(ref Utf8JsonWriter writer, EnumArrays enumArrays, JsonSerializerOptions jsonSerializerOptions)
        {
            writer.WritePropertyName("array_enum");
            JsonSerializer.Serialize(writer, enumArrays.ArrayEnum, jsonSerializerOptions);

            var justSymbolRawValue = EnumArrays.JustSymbolEnumToJsonValue(enumArrays.JustSymbol);
            if (justSymbolRawValue != null)
                writer.WriteString("just_symbol", justSymbolRawValue);
            else
                writer.WriteNull("just_symbol");
        }
    }
}
