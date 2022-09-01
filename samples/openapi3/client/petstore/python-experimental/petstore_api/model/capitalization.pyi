# coding: utf-8

"""
    OpenAPI Petstore

    This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\  # noqa: E501

    The version of the OpenAPI document: 1.0.0
    Generated by: https://openapi-generator.tech
"""

from datetime import date, datetime  # noqa: F401
import decimal  # noqa: F401
import functools  # noqa: F401
import io  # noqa: F401
import re  # noqa: F401
import typing  # noqa: F401
import uuid  # noqa: F401

import frozendict  # noqa: F401

from petstore_api import schemas  # noqa: F401


class Capitalization(
    schemas.DictSchema
):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """


    class MetaOapg:
        class properties:
            smallCamel = schemas.StrSchema
            CapitalCamel = schemas.StrSchema
            small_Snake = schemas.StrSchema
            Capital_Snake = schemas.StrSchema
            SCA_ETH_Flow_Points = schemas.StrSchema
            ATT_NAME = schemas.StrSchema
            __annotations__ = {
                "smallCamel": smallCamel,
                "CapitalCamel": CapitalCamel,
                "small_Snake": small_Snake,
                "Capital_Snake": Capital_Snake,
                "SCA_ETH_Flow_Points": SCA_ETH_Flow_Points,
                "ATT_NAME": ATT_NAME,
            }
        additional_properties = schemas.AnyTypeSchema
    
    smallCamel: typing.Union[MetaOapg.properties.smallCamel, schemas.Unset]
    CapitalCamel: typing.Union[MetaOapg.properties.CapitalCamel, schemas.Unset]
    small_Snake: typing.Union[MetaOapg.properties.small_Snake, schemas.Unset]
    Capital_Snake: typing.Union[MetaOapg.properties.Capital_Snake, schemas.Unset]
    SCA_ETH_Flow_Points: typing.Union[MetaOapg.properties.SCA_ETH_Flow_Points, schemas.Unset]
    ATT_NAME: typing.Union[MetaOapg.properties.ATT_NAME, schemas.Unset]
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["smallCamel"]) -> typing.Union[MetaOapg.properties.smallCamel, schemas.Unset]: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["CapitalCamel"]) -> typing.Union[MetaOapg.properties.CapitalCamel, schemas.Unset]: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["small_Snake"]) -> typing.Union[MetaOapg.properties.small_Snake, schemas.Unset]: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["Capital_Snake"]) -> typing.Union[MetaOapg.properties.Capital_Snake, schemas.Unset]: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["SCA_ETH_Flow_Points"]) -> typing.Union[MetaOapg.properties.SCA_ETH_Flow_Points, schemas.Unset]: ...
    
    @typing.overload
    def __getitem__(self, name: typing.Literal["ATT_NAME"]) -> typing.Union[MetaOapg.properties.ATT_NAME, schemas.Unset]: ...
    
    @typing.overload
    def __getitem__(self, name: str) -> typing.Union[MetaOapg.additional_properties, schemas.Unset]: ...
    
    def __getitem__(self, name: typing.Union[str, typing.Literal["smallCamel"], typing.Literal["CapitalCamel"], typing.Literal["small_Snake"], typing.Literal["Capital_Snake"], typing.Literal["SCA_ETH_Flow_Points"], typing.Literal["ATT_NAME"], ]):
        # dict_instance[name] accessor
        if not hasattr(self.MetaOapg, 'properties') or name not in self.MetaOapg.properties.__annotations__:
            return super().__getitem__(name)
        try:
            return super().__getitem__(name)
        except KeyError:
            return schemas.unset

    def __new__(
        cls,
        *args: typing.Union[dict, frozendict.frozendict, ],
        smallCamel: typing.Union[MetaOapg.properties.smallCamel, str, schemas.Unset] = schemas.unset,
        CapitalCamel: typing.Union[MetaOapg.properties.CapitalCamel, str, schemas.Unset] = schemas.unset,
        small_Snake: typing.Union[MetaOapg.properties.small_Snake, str, schemas.Unset] = schemas.unset,
        Capital_Snake: typing.Union[MetaOapg.properties.Capital_Snake, str, schemas.Unset] = schemas.unset,
        SCA_ETH_Flow_Points: typing.Union[MetaOapg.properties.SCA_ETH_Flow_Points, str, schemas.Unset] = schemas.unset,
        ATT_NAME: typing.Union[MetaOapg.properties.ATT_NAME, str, schemas.Unset] = schemas.unset,
        _configuration: typing.Optional[schemas.Configuration] = None,
        **kwargs: typing.Union[MetaOapg.additional_properties, dict, frozendict.frozendict, str, date, datetime, uuid.UUID, int, float, decimal.Decimal, None, list, tuple, bytes, ],
    ) -> 'Capitalization':
        return super().__new__(
            cls,
            *args,
            smallCamel=smallCamel,
            CapitalCamel=CapitalCamel,
            small_Snake=small_Snake,
            Capital_Snake=Capital_Snake,
            SCA_ETH_Flow_Points=SCA_ETH_Flow_Points,
            ATT_NAME=ATT_NAME,
            _configuration=_configuration,
            **kwargs,
        )