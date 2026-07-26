<!-- lastmod 2022-10-10 -->
<!-- image -->

## General Description

The HS I 2 C-compatible module is a reference solution for implementing an interface that is compatible with the high-speed (HS) mode (3.4MHz, 1.7MHz), fast mode (400kHz), and standard mode (100kHz) of the I 2 C standard. The module consists primarily of an Altera EPM3256AQC208-10 programmable logic device (PLD) containing the DI2CM core available from Digital Core Design. The module allows microcontrollers (µCs) with a compatible 8-bit-memory-mapped parallel interface to communicate with I 2 C-compatible slave devices.

The HS I 2 C-compatible module is provided as part of selected Maxim evaluation systems. The main purpose of  the  HS  I 2 C-compatible  module  is  the  evaluation  of Maxim products. The use of the HS I 2 C-compatible module as a development board or any other use not described in selected Maxim evaluation kit (EV kit)/ evaluation system (EV system) data sheets is not supported by Maxim.

| DESIGNATION             |   QTY | DESCRIPTION                                                       |
|-------------------------|-------|-------------------------------------------------------------------|
| C1-C15, C19, C20, C21   |    18 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104KT |
| C16                     |     1 | 1µF ±20%, 10V X5R ceramic capacitor (0805) TDK C2012X5R1A105M     |
| C17                     |     1 | 10µF ±20%, 25V X5R ceramic capacitor (1210) TDK C3225X5R1E106M    |
| C18                     |     1 | 100µF, 6.3V, 45m Ω low-ESR POSCAP (D2) Sanyo 6TPC100M             |
| D1                      |     1 | 1A, 30V Schottky diode Nihon EP10QY03                             |
| FB1, FB2                |     2 | Surface-mount ferrite beads (0603) TDK MMZ1608B601C               |
| J1                      |     1 | Not installed,10-pin, 2 x 5 header                                |
| J2                      |     1 | 20-pin, 2 x 10 male right-angle connector                         |
| J3                      |     1 | 2 x 20 right-angle female connector                               |
| JU1, JU2, JU5           |     3 | 3-pin headers                                                     |
| JU3, JU4, JU6, JU7, JU8 |     5 | 2-pin headers                                                     |
| L1                      |     1 | 10µH inductor Sumida CDRH6D28-100NC                               |

## Features

- ♦ HS-Mode I 2 C-Compatible Interface (3.4MHz, 1.7MHz)
- ♦ Fast-Mode I 2 C-Compatible Interface (400kHz)
- ♦ Standard-Mode I 2 C-Compatible Interface (100kHz)
- ♦ Proven Design
- ♦ Proven PC Board Layout
- ♦ On-Board 40MHz Crystal Oscillator
- ♦ On-Board Regulated +3.3V

## Ordering Information

| PART NUMBER   | INTERFACE TYPE                         |
|---------------|----------------------------------------|
| HSI2CMOD      | HS/Fast/Standard-Mode I 2 C-Compatible |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                            |
|---------------|-------|----------------------------------------------------------------------------------------|
| R1, R2        |     2 | 1.5k Ω ±5% resistors (1206) (suitable for a 2-wire bus capacitance of ≤ 200pF)         |
| R3, R4, R7    |     3 | 0 Ω ±5% resistors (1206)                                                               |
| R5            |     1 | 165k Ω ±1% resistor (0603)                                                             |
| R6            |     1 | 100k Ω ±1% resistor (0603)                                                             |
| SW1           |     1 | DIP switch default: SW: 1-4 (ON) SW: 2-3 (ON)                                          |
| U1            |     1 | Altera EPM3256AQC208-10 (208-pin PQFP)                                                 |
| U2            |     1 | Step-down regulator (8-pin µMAX) Maxim MAX1776EUA                                      |
| U3            |     1 | 40MHzcrystal oscillator (half-size DIP) Oscilent 320-40.0M-5E-TTS                      |
| U4            |     1 | Tri-state logic buffer (5-pin SOT23) Fairchild Semiconductor NC7SZ126M5X               |
| U5, U6, U7    |     3 | Schmitt trigger input-logic inverters (5-pin SOT23) Fairchild Semiconductor NC7SZ14M5X |
| None          |     5 | Shunts                                                                                 |

P,

Is

ae

c-

fs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

1

## HS I 2 C-Compatible Module

## Component Suppliers

| SUPPLIER                | PHONE          | WEBSITE                   |
|-------------------------|----------------|---------------------------|
| Altera Corporation      | 1-800-800-3753 | www.altera.com            |
| Digital Core Design     | 48-32282-8266  | www.digitalcoredesign.com |
| Fairchild Semiconductor | 1-888-522-5372 | www.fairchildsemi.com     |
| Nihon                   | 81-33343-3411  | www.niec.co.jp            |
| Oscilent                | 1-949-252-0522 | www.oscilent.com          |
| Sanyo                   | 1-619-661-6322 | www.sanyo.com             |
| Sumida                  | 1-847-545-6700 | www.sumida.com            |
| TDK                     | 1-847-803-6100 | www.component.tdk.com     |

Note: Please indicate that you are using a Maxim part when contacting these component suppliers.

## Description of Hardware

## HS I 2 C-Compatible Module Supplies

The HS I 2 C-compatible module requires two supplies. The on-board 3.3V regulator requires an input voltage at VIN of 4.5V to 24V (J3-5, J3-6). The module also requires a regulated 5V logic supply (J3-7, J3-8). A Maxim µC module normally provides both of these supplies.

## EPM3256AQC208-10 PLD (Altera)

The EPM3256AQC208-10 is from Altera's MAX3000A family of PLDs. This 256 product-term device accepts 3.3V or 5V logic even when powered from a 3.3V supply.  Contact Altera for any questions relating to the PLD. See the Component Suppliers section for contact information.

## HS I 2 C-Compatible Module Jumpers

* The asterisks in the tables below indicate the default configuration.

## Table 1. I 2 C-Compatible Logic-Supply Selection

| JUMPER   | SHUNT POSITION   | DESCRIPTION                     |
|----------|------------------|---------------------------------|
| JU1      | 1-2              | 3.3V I 2 C-compatible interface |
| JU1      | 2-3*             | 5V I 2 C-compatible interface   |

## Table 2. Crystal Oscillator Enable

| JUMPER   | SHUNT POSITION   | DESCRIPTION                    |
|----------|------------------|--------------------------------|
| JU2      | 1-2*             | Enable the crystal oscillator  |
| JU2      | 2-3              | Disable the crystal oscillator |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Table 3. GPIOA

| JUMPER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU3      | ON               | Do not use       |
| JU3      | OFF*             | Disconnect GPIOA |

## Table 4. GPIOB

| JUMPER   | SHUNT POSITION   | DESCRIPTION      |
|----------|------------------|------------------|
| JU4      | ON               | Do not use       |
| JU4      | OFF*             | Disconnect GPIOB |

## Table 5. Global PLD Clear (GCLR)

| JUMPER   | SHUNT POSITION   | DESCRIPTION           |
|----------|------------------|-----------------------|
| JU5      | 1-2              | Reset the PLD         |
| JU5      | 2-3*             | Normal operation mode |

## Table 6. Active-High RD-Line Option

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                     |
|----------|------------------|-------------------------------------------------------------------------------------------------|
| JU6      | ON               | The RD line to connector J3 pin 9 (J3-9) is active high; remove U5                              |
| JU6      | OFF*             | The RD line to connector J3 pin 9 (J3-9) is active low; U5 must be present for proper operation |

## Table 7. Active-High CS-Line Option

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                       |
|----------|------------------|---------------------------------------------------------------------------------------------------|
| JU7      | ON               | The CS line to connector J3 pin 11 (J3-11) is active high; remove U6                              |
| JU7      | OFF*             | The CS line to connector J3 pin 11 (J3-11) is active low; U6 must be present for proper operation |

## Table 8. Active-High WR-Line Option

| JUMPER   | SHUNT POSITION   | DESCRIPTION                                                                                       |
|----------|------------------|---------------------------------------------------------------------------------------------------|
| JU8      | ON               | The WR line to connector J3 pin 10 (J3-10) is active high; remove U7                              |
| JU8      | OFF*             | The WR line to connector J3 pin 10 (J3-10) is active low; U7 must be present for proper operation |

<!-- image -->

## HS I 2 C-Compatible Module

Figure 1. HS I 2 C-Compatible Module Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## HS I 2 C-Compatible Module

Figure 2. HS I 2 C-Compatible Module Schematic (Continued)

<!-- image -->

Figure 3. HS I 2 C-Compatible Module Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Description of PLD Core

## DI2CM Core (Digital Core Design)

The DI2CM is an I 2 C-compatible master-IP core from Digital Core Design. Please contact Digital Core Design for any questions relating to the DI2CM IP core. See the Component Suppliers section for contact information or email Digital Core Design at info@dcd.pl for more information.

<!-- image -->

## HS I 2 C-Compatible Module

<!-- image -->

Figure 4. HS I 2 C-Compatible Module PC Board Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## HS I 2 C-Compatible Module

Figure 5. HS I 2 C-Compatible Module PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600