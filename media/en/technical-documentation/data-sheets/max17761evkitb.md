<!-- lastmod 2022-08-02 -->
## MAX17761 5V Output Evaluation Kit

## General Description

The MAX17761 5V output EV kit is a proven design to evaluate  the  MAX17761  high-efficiency,  high-voltage, synchronous  step-down  DC-DC  converter  in  a  TDFN package. The EV kit generates 5V at load currents up to 1A from a 6.5V to 76V input supply. The EV kit features a 400kHz switching frequency for optimum efficiency and component  size.  The  EV  kit  features  adjustable  input undervoltage  lockout,  adjustable  soft-start,  adjustable switching  frequency,  adjustable  current  limit,  open-drain RESET signal and external frequency synchronization.

## Features

- Operates from a 6.5V to 76V Input Supply
- 5V Output Voltage
- Up to 1A Output Current
- 400kHz Switching Frequency
- Enable/UVLO Input, Resistor-Programmable UVLO Threshold
- Adjustable Soft-Start Time
- MODE/ILIM Pin to Select Among PWM or PFM Modes and 1.6A or 1.14A current limits
- Auxiliary Bootstrap LDO to improve efficiency
- Open-Drain RESET Output
- External Frequency Synchronization
- Overcurrent and Overtemperature Protection
- Proven PCB Layout
- Fully Assembled and Tested

Evaluates: MAX17761 in

5V Output-Voltage Application

## Quick Start

## Recommended Equipment

- MAX17761 5V output EV kit
- 6.5V to 76V, 2A DC input power supply
- Load capable of sinking 1A
- Digital voltmeter (DVM)

## Procedure

The EV kit is fully assembled and tested. Follow the steps below  to  verify  board  operation. Caution:  Do  not  turn on power supply until all connections are completed.

- 1) Set the power supply at a voltage between 6.5V and 76V. Disable the power supply.
- 2) Connect the positive terminal of the power supply to the VIN PCB pad and the negative terminal to the nearest PGND PCB pad. Connect the positive terminal of the 1A load to the VOUT PCB pad and the negative terminal to the nearest PGND PCB pad.
- 3) Connect the DVM across the VOUT PCB pad and the nearest PGND PCB pad.
- 4) Verify that shunts are installed across pins 1-2 on jumper JU1, JU2, and JU3 (see Table 3 for details).
- 5) Turn on the DC power supply.
- 6) Enable the load.
- 7) Verify that the DVM displays 5V.

Ordering Information appears at end of data sheet.

<!-- image -->

## MAX17761 5V Output Evaluation Kit

## Detailed Description

The  MAX17761  5V  Output  EV  kit  provides  a  proven design to evaluate the MAX17761  high-efficiency, highvoltage,  synchronous  step-down  DC-DC  converter.  The EV kit generates 5V at load currents up to 1A from a 6.5V to 76V input supply. The EV kit features a 400kHz switching frequency for optimum efficiency and component size.

The  EV  kit  includes  an  EN/UVLO  PCB  pad  and  JU1  to enable the output at a desired input voltage. The RT/SYNC PCB pad and JU3 allow an external clock to synchronize the device. An additional RESET PCB pad is available for monitoring when the converter output is in regulation.

## Soft-Start Input (SS)

The device implements adjustable soft-start operation to reduce inrush current. A capacitor connected from the SS pin  to  SGND programs the soft-start time for the corre -sponding output voltage. The selected output capacitance (C SEL ) and the output voltage (V OUT ) determine the mini -mum required soft-start capacitor as follows:

<!-- formula-not-decoded -->

The soft-start time (t SS )  is  related  to  the  capacitor  con -nected at SS (C SS ) by the following equation:

<!-- formula-not-decoded -->

For example, to program a 5.3ms soft-start time, a 33nF capacitor should be connected from the SS pin to SGND. The minimum possible soft-start time is 5ms.

## Regulator Enable/Undervoltage-Lockout Level (EN/UVLO)

The device offers an adjustable input undervoltage-lock -out  level.  For  always  on  operation,  no  shunt  should  be installed across JU1. To disable the output, install a shunt across pins 2-3 on JU1 and the EN/UVLO pin is pulled to GND. See Table 3 for JU1 settings.

Set the voltage at which each converter turns on with a resistive  voltage-divider  connected  from  VIN  to  SGND. Connect the center node of the divider to EN/UVLO pin.

Choose R1 as follows:

<!-- formula-not-decoded -->

Where V INU  is the input voltage at which the MAX17761 is required to turn ON and R1 is in Ω. Calculate the value of R2 as follows:

<!-- formula-not-decoded -->

## Evaluates: MAX17761 in 5V Output-Voltage Application

## Current Limit and Mode of Operation Selection

The following table lists the values of the resistor R5 to program PWM or PFM modes of operation and 1.6A or 1.14A peak current limits.

## Table 1. RILIM Resistor vs. Modes of Operation and Peak Current Limit

| R5 (kΩ)   | MODE OF OPERATION   |   PEAK CURRENT LIMIT (A) |
|-----------|---------------------|--------------------------|
| OPEN      | PFM                 |                      1.6 |
| 422       | PFM                 |                     1.14 |
| 243       | PWM                 |                      1.6 |
| 121       | PWM                 |                     1.14 |

The mode of operation cannot be changed on-the-fly after power-up.

## Switching Frequency Selection and External Frequency synchronization

The RT/SYNC pin programs the switching frequency of the converter. The resistor R7 sets the switching frequency of  the  part  at  any  one  of  four  discrete  frequencies200kHz,  300kHz,  400kHz,  and  600kHz.  The  following table gives the resistor values.

The internal oscillator of the MAX17761 can be synchro -

## Table 2. Switching Frequency vs. RT Resistor

|   SWITCHING FREQUENCY (kHz) |   R7 (kΩ) |
|-----------------------------|-----------|
|                         200 |       210 |
|                         300 |       140 |
|                         400 |       105 |
|                         600 |      69.8 |

nized to an external clock signal on the RT/SYNC pin. A shunt  should  be  placed  across  the  jumper  JU3  for  this purpose.  The  external  synchronization  clock  frequency must be between 1.15 x f SW  and 1.4 x f SW , where f SW is the frequency programmed by R7.

## Table 3. Regulator Enable (EN/UVLO) Description (JU1)

| SHUNT POSITION   | EN/UVLO PIN                                                | MAX17761 OUTPUT                                         |
|------------------|------------------------------------------------------------|---------------------------------------------------------|
| Not Installed    | Floating                                                   | Always ON                                               |
| 1-2              | Connected to the center node of resistor-divider R1 and R2 | Enabled, UVLO level set through the R1 and R2 resistors |
| 2-3              | Connected to SGND                                          | Disabled                                                |

## MAX17761 5V Output Evaluation Kit

## MAX17761 EV Kit Performance Report

<!-- image -->

<!-- image -->

## Evaluates: MAX17761 in 5V Output-Voltage Application

<!-- image -->

<!-- image -->

## MAX17761 5V Output Evaluation Kit

## MAX17761 EV Kit Performance Report (continued)

<!-- image -->

<!-- image -->

<!-- image -->

<!-- image -->

Evaluates: MAX17761 in

5V Output-Voltage Application

## MAX17761 EV Kit Bill of Materials

|   No. | Description                                   |   Quantity | Designator   | Part Number                                                   |
|-------|-----------------------------------------------|------------|--------------|---------------------------------------------------------------|
|     1 | 0.1uF 10%, 100V ,X7R,Ceramic capacitor (0603) |          1 | C1           | MURATA GRM188R72A104KA35, TDK CC0603KRX7R0BB104               |
|     2 | 2.2uF 10%, 100V ,X7R,Ceramic capacitor (1210) |          1 | C2           | MURATA GRM32ER72A225KA35, TDK CGA6N3X7R2A225K230              |
|     3 | 22uF 20%,100V, Electrolytic capacitor         |          1 | C3           | PANASONIC EEE-TG2A220UP                                       |
|     4 | 1uF 10%, 6.3V ,X7R,Ceramic capacitor (0603)   |          1 | C4           | MURATA GRM188R70J105KA01, SAMSUNG ELECTRONICS CL10B105KQ8NNNC |
|     5 | 47pF,5%,25V,COG, Ceramic capacitor(0402)      |          1 | C5           | MURATA GRM1555C1E470JA01                                      |
|     6 | 33nF, 10%, 25V, X7R, Ceramic capacitor(0402)  |          1 | C6           | MURATA GRM155R71E333KA88                                      |
|     7 | 0.1uF,10%,50V, X7R,Ceramic capacitor (0402)   |          1 | C7           | MURATA GRM155R71H104KE14                                      |
|     8 | 22uF,10%,10V, X7R,Ceramic capacitor (1210)    |          1 | C8           | MURATA GRM32ER71A226K                                         |
|     9 | 4700pF,10%,50V, X7R,Ceramic capacitor (0402)  |          1 | C9           | MURATA GRM155R71H472KA01                                      |
|    10 | 3-pin header (36-pin header 0.1' centers )    |          1 | JU1          | Sullins: PEC03SAAN                                            |
|    11 | 2-pin header (36-pin header 0.1' centers )    |          2 | JU2,JU3      | Sullins: PEC02SAAN                                            |
|    12 | INDUCTOR, 33 uH,1.45A                         |          1 | L1           | WURTH 74404064330                                             |
|    13 | 649k ohm ±1%,1/10W, resistor (0603)           |          1 | R1           | Any                                                           |
|    14 | 127k ohm ±1%,1/10W, resistor (0603)           |          1 | R2           | Any                                                           |
|    15 | 95.3k ohm ±1%,1/16W, resistor (0402)          |          1 | R3           | Any                                                           |
|    16 | 18.2k ohm ±1%,1/16W, resistor (0402)          |          1 | R4           | Any                                                           |
|    17 | Not installed, OPEN (0402)                    |          0 | R5           | Any                                                           |
|    18 | 10k ohm ±1%,1/10W, resistor (0402)            |          1 | R6           | Any                                                           |
|    19 | 105k ohm ±1%, 1/16W, resistor (0402)          |          1 | R7           | Any                                                           |
|    20 | 4.7ohm ±1%, 1/16W, resistor (0402)            |          1 | R8           | Any                                                           |
|    21 | 16.9k ohm ±1%, 1/10W, resistor (0402)         |          1 | R9           | Any                                                           |
|    22 | Buck Converter MAX17761ATC+                   |          1 | U1           | MAX17761ATC+                                                  |
|    23 | Shunts (JU1, JU2, JU3)                        |          3 | -            | Sullins: STC02SYAN                                            |

## Component Suppliers

| SUPPLIER            | WEBSITE             |
|---------------------|---------------------|
| MurataAmericas      | www.murata.com      |
| Panasonic Corp.     | www.panasonic.com   |
| Samsung Electronics | www.samsung.com     |
| Sullins Corp.       | www.sullinscorp.com |
| TDK Corp.           | www.tdk.com         |
| Wurth Electronics   | www.we-online.com   |

Note: Indicate that you are using the MAX17761 when contacting these component suppliers.

## Ordering Information

| PART            | TYPE   |
|-----------------|--------|
| MAX17761EVKITB# | EV Kit |

#Denotes RoHS compliant.

## MAX17761 EV Kit Schematic

<!-- image -->

## MAX17761 5V Output Evaluation Kit

## MAX17761 EV Kit PCB Layout

MAX17761 EV Kit PCB 5V Output Top Silkscreen

<!-- image -->

MAX17761 EV Kit PCB 5V Output Bottom Layer

<!-- image -->

Evaluates: MAX17761 in

5V Output-Voltage Application

MAX17761 EV Kit PCB 5V Output Top Layer

<!-- image -->

## MAX17761 5V Output Evaluation Kit

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION                                                                                                                                        | PAGES CHANGED   |
|-------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-----------------|
|                 0 | 8/17            | Initial release                                                                                                                                    | -               |
|                 1 | 2/18            | Updated Detailed Description , TOC01-TOC04, TOC06 and TOC08, Component Sup- plier table, and replaced the Bill of Materials and Schematic diagram. | 2-6             |

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-8-629-4642, or visit Maxim Integrated's website at w.maximintegrated.com.

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and speci¿cations without notice at any time.

Evaluates: MAX17761 in

5V Output-Voltage Application