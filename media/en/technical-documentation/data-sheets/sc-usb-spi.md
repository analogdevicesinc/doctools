<!-- lastmod 2022-08-02 -->
<!-- image -->

## General Description

SC-USB-SPI is an adapter used for converting a computer 's USB interface connection to the serial parallel interface  (SPI) used by the SC18 XX.  Only  two  connections  are required  for use with the SC18XX and no external power supply is required. The USB connection from the host computer is made through a standard USB 2.0 cable and connects to the USB-B female connector, J3, on SC-USB-SPI. The interface connection between circuit assembly containing the SC18XX and the USB-SPI adapter is through J2.

This adapter can only be used to run one instance of the SC18 XX GUI at a  time. Conflicts will occur when running multiple SC18XX GUIs trying to open the same SPI communication pipe.

Typical Operating Temperature: +25 o C

## Connector Interface Descriptions

## J2SC18XX EVB Interface 3

Connection Diagram

|   Pin | Description             | Connection to SC18XX EVB 3.0   |
|-------|-------------------------|--------------------------------|
|     1 | WDT (Watch Dog Timer) 1 | J2-1 (TESTSEL2) 2              |
|     2 | Spare 1 1               | J2-2 (TESTSEL1) 2              |
|     3 | TESTSEL0                | J2-3 (TESTSEL0)                |
|     4 | STATO                   | J2-4 (STATO_B)                 |
|     5 | TXENB                   | J2-5 (TXENB)                   |
|     6 | RESETN                  | J2-6 (RESETN)                  |
|     7 | GND                     | J2-7(GND)                      |
|     8 | SSN                     | J2-8 (SSN)                     |
|     9 | GND                     | J2-9 (GND)                     |
|    10 | SDO                     | J2-10 (SDI)                    |
|    11 | GND                     | J2-11 (GND)                    |
|    12 | SDI                     | J2-12 (SDO_B)                  |
|    13 | GND                     | J2-13 (GND)                    |
|    14 | SCK                     | J2-14 (SCLK)                   |

<!-- image -->

Note 1:

For factory use only.

Note 2:

Signal not used on SC-18XX Evaluation Board (EVB 3.0).

Note 3: Mating connector P/N AWP14-7241-T-R, Assmann Electronics provided with SC-USB-SPI.

J3USB-B Interface (Mating Connector- USB-B male)

## Evaluation Kit Ordering Information

| Part Number   | Description                            |
|---------------|----------------------------------------|
| SC-USB-SPI    | Adapter, SPI-U SB Interface/Controller |

## SC-USB-SPI USB-to-SPI Interface Adapter

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION   | PAGES CHANGED   |
|-------------------|-----------------|---------------|-----------------|
|                 0 | 6/14            |               | -               |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.