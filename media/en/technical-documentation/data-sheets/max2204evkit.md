<!-- lastmod 2022-08-02 -->
## General Description

The MAX2204 evaluation kit (EV kit) simplifies evaluation  of  the  MAX2204 RF power detector. The EV kit enables testing of all functions with no additional support circuitry. The RF power-detector input uses a 50 Ω SMA connector on the evaluation board for convenient connection to test equipment.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                  |
|---------------|-------|--------------------------------------------------------------|
| C1            |     1 | 220pF ±10% capacitor (0402) Murata GRM155R71H221K            |
| C2            |     1 | 27pF ±5% capacitor (0402) Murata GRM155R71H270J              |
| C3            |     1 | 22µF ±10% capacitor (1206) Murata GRM31CR60J226K             |
| C4            |     1 | 2200pF ±10% capacitor (0402) Murata GRM155R71H222K           |
| J1, J2        |     2 | Inline headers Sullins PEC36SAAN                             |
| J4            |     1 | SMA end-launch jack receptacle, 0.062in Johnson 142-0701-801 |
| JP1           |     1 | 2-pin jumper block, single Digi-Key S1012-36-ND              |
| JP3           |     1 | Test point, PC mini, red Keystone 5000                       |
| R1            |     1 | 50 Ω ±5% resistor (0402)                                     |
| R2            |     1 | 0 Ω ±5% resistor (0402)                                      |
| U1            |     1 | MAX2204EXK+ RF Power Detector                                |
| -             |     1 | PCB: MAX2204 Evaluation Kit+                                 |

<!-- image -->

## Features

- ♦ +2.7V to +3.3V Single-Supply Operation
- ♦ 50 Ω SMA RF Input Port Connector
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE     | IC PACKAGE   |
|---------------|----------------|--------------|
| MAX2204EVKIT+ | -40°C to +85°C | 5 SC70       |

## Quick Start

## Test Equipment Required

This section lists the r ecommended test equipment to verify  operation  of  the  MAX2204. It is  intended as a guide only, and some substitutions are possible:

- One RF signal generator capable of delivering at least +5dBm of output power at the operating frequency (HPE4433B or equivalent)
- One RF power sensor capable of handling at least +10dBm of output power at the operating f requency (HP 8482A or equivalent)
- One RF power meter capable of measuring up to +10dBm of output power at the operating frequency (HP 437B or equivalent)
- An RF spectrum analyzer that covers the MAX2204 operating frequency range (e.g., FSEB20)
- A power supply capable of up to 10mA at +2.7V to +3.3V
- A digital multimeter (DMM) for measuring output voltage, supply current, and output current
- 50 Ω SMA cables
- A network analyzer (e.g., HP 8753D) to measure input impedance (optional)

## Component Suppliers

| SUPPLIER              | PHONE        | WEBSITE                   |
|-----------------------|--------------|---------------------------|
| Johnson Components    | 507-833-8822 | www.johnsoncomponents.com |
| Murata Mfg. Co., Ltd. | 770-436-1300 | www.murata.com            |

Note:

Indicate that you are using the MAX2204 when contacting these component suppliers.

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

## MAX2204 Evaluation Kit

## Connections and Setup

This section provides a step-by-step guide to operating the EV kit and testing the device's function. Caution: Do not turn on the DC power or RF signal generators until all connections are made:

- 1) Set the jumper (JP1) on the EV kit to ON. This enables the device.
- 2) Connect a DC supply set to +2.85V (through a DMM, if desired) to the VCC and GND terminals on the EV kit. If available, set the current limit to 10mA. Do not turn on the supply.
- 3) Connect the output (J3) to a DMM to measure output voltage.
- 4) Set  the  signal  generator  output  to  +5dBm, f = 836MHz. Using the power meter, determine the actual output power of the signal generator.
- 5) Connect the signal generator to the SMA connector. Do not turn on the signal generator.
- 6) Turn on the DC supply; the supply current should read approximately 1.3mA.
- 7) Activate the signal generator. The output voltage should read approximately 2V.

## Layout Issues

The MAX2204 is not particularly sensitive to the layout, since it only needs 5dBm for maximum output voltage. However, there are two areas that need attention: the GND pin and the supply bypassing. Connect the GND pin to PCB ground with a GND via as close as possible, and place the supply bypassing capacitor close to the part.

Figure 1. MAX2204 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX2204 EV Kit Component Placement Guide-Top Silkscreen

<!-- image -->

## MAX2204 Evaluation Kit

Figure 3. MAX2204 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX2204 EV Kit Component Placement GuideSecondary/Bottom Component Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

3

Janet Freed