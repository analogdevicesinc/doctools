<!-- lastmod 2022-08-03 -->
## General Description

The MAX1510 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains the MAX1510, a low-voltage linear regulator for DDR memory termination. The low-voltage linear regulator provides a variable 0.5V to 1.5V output voltage range. The EV kit requires a 1.1V to 3.6V input voltage source, and a 3.3V low-power biasing supply. The EV kit is capable of sourcing or sinking up to 1.5A continuous.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1            |     1 | 220µF ± 20%, 10V polymer capacitor (D4) Sanyo 10TPB220M            |
| C2            |     1 | 10µF ± 20%, 6.3V X5R ceramic capacitor (0805) TDK C2012X5R0J106M   |
| C3            |     1 | 1µF ± 10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J105K    |
| C4            |     1 | 1000pF ± 10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H102K  |
| C5            |     1 | 0.33µF ± 10%, 6.3V X5R ceramic capacitor (0603) TDK C1608X5R0J334K |
| C6            |     1 | 100µF ± 20%, 6.3V X5R ceramic capacitor (1210) TDK C3225X5R0J107M  |
| C7-C11        |     0 | Not installed, capacitors (0603)                                   |
| JU1           |     1 | 3-pin header                                                       |
| JU2           |     1 | 2-pin header                                                       |
| R1, R2        |     2 | 10k Ω ± 1% resistors (0603)                                        |
| R3            |     1 | 100k Ω ± 5% resistor (0603)                                        |
| R4            |     0 | Not installed, resistor (0603)                                     |
| U1            |     1 | MAX1510ETB (10-pinTDFN3mm x3mm)                                    |
| None          |     2 | Shunts                                                             |
| None          |     1 | MAX1510 PC board                                                   |

<!-- image -->

## Features

- ♦ 0.5V to 1.5V Output Voltage Range
- ♦ Sources or Sinks Up to 1.5A Continuous
- ♦ 1.1V to 3.6V Input Voltage Range
- ♦ External Reference Input with ±5mA Reference Output Buffer
- ♦ Output Remote Sense
- ♦ Open-Drain, Power-Good Output Signal
- ♦ Low-Profile Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1510EVKIT | 0°C to +70°C | 10 TDFN      |

## Quick Start

## Recommended Equipment

- DC power supplies (VCC) 3.3V, 100mA (IN) 1.1V to 3.6V, 5A
- One voltmeter

## Procedure

The MAX1510 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

- 1) Verify that a shunt is installed across pins 1 and 2 of jumper JU1 (EV kit ON).
- 2) Verify that a shunt is installed on jumper JU2 (REF\_IN pad connected to IN pad).
- 3) Connect the positive terminal of the VCC power supply to the VCC pad. Connect the negative terminal of the VCC power supply to the PGND pad.
- 4) Connect the positive terminal of the IN power supply to the IN pad. Connect the negative terminal of the IN power supply to the PGND pad.

## Component Suppliers

| SUPPLIER                 | PHONE        | FAX          | WEBSITE               |
|--------------------------|--------------|--------------|-----------------------|
| Sanyo Device (USA) Corp. | 619-661-6322 | 619-661-1055 | www.sanyodevice.com   |
| TDK                      | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note:

Indicate that you are using the MAX1510 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1510 Evaluation Kit

- 5) Turn on both power supplies.
- 6) Set the IN power supply to 2.5V.
- 7) Set the VCC power supply to 3.3V.
- 8) Verify that the output (OUT) is between 1.235V and 1.265V.
- 9) Verify that the output reference (REFOUT) is between 1.24V and 1.26V.
- 10) Verify that power-good (PGOOD) is 3.3V.

## Detailed Description

The MAX1510 EV kit contains a low-voltage linear regulator. The regulator delivers an accurate output voltage in  the  0.5V  to  1.5V  range,  and  an  input  voltage  in  the 1.1V to 3.6V range. The control circuitry and the two internal  n-channel MOSFETs of the MAX1510 operate from a separate 3.3V bias power supply.

## REFIN (REF\_IN Pad)

The MAX1510 REFIN pin accepts an external reference voltage and regulates the output sense voltage (OUTS) to the voltage at REFIN. As configured, the REFIN pin is one-half the voltage of the REF\_IN pad. This voltage is set by resistors R1 and R2.

## Remote Sensing (OUTS)

The MAX1510 output voltage can be sensed remotely using the OUTS pad. The OUTS pad is directly connected to the MAX1510 OUTS pin. The MAX1510 regulates the OUTS voltage to the REFIN voltage. To adjust the remote-sense point, cut open the PC board trace between resistor R4 pads, and connect the OUTS pad to the load.

## Local Sensing (Internal)

The MAX1510 contains an internal 12k Ω resistor between OUT and OUTS. This feature provides a local output sensing, preventing output failure in the event OUTS is disconnected or improperly soldered.

## REFOUT

The EV kit provides a buffered output reference voltage at the REFOUT pad. The REFOUT pin voltage is internally  set  equal  to  the  REFIN  pin  voltage  of  the MAX1510 IC. As configured, the REFOUT voltage is one-half the voltage connected to the REF\_IN pad. REFOUT is active when the voltage at REFIN &gt; 0.45V and VCC &gt; 2.65V. REFOUT is independent of the shutdown mode.

## PGOOD

The MAX1510 features an open-drain signal at the PGOOD pin, which outputs a logic-low signal when the output is out of regulation or when the EV kit is in shutdown mode. A PGOOD pad is provided for interfacing to  this  signal.  The pullup resistor R3 connected between PGOOD and VCC provides a 3.3V logic-level output signal.

## Output Capacitors (C7-C10)

The output capacitors C7-C10 on the EV kit simulate the decoupling capacitors located close to the DDR memory socket. These capacitors are not required for stable output-voltage regulation.

## Jumper Selection

## Shutdown ( SHDN )

The MAX1510 EV kit features a shutdown mode that reduces the MAX1510 quiescent current to 350µA (typ).  Jumper JU1 selects the shutdown mode for the MAX1510. Table 1 lists the selectable jumper options.

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | SHDN PIN         | EV KIT STATUS   |
|------------------|------------------|-----------------|
| 1-2 (Default)    | Connected to VCC | OUT Enabled     |
| 2-3              | Connected to GND | OUT Disabled    |

Note: REFOUT is independent of the shutdown mode and is active when the voltage at REFIN &gt; 0.45V and VCC &gt; 2.65V.

## Output-Voltage Regulation Selection

The MAX1510 EV kit's output voltage can be regulated by an external reference voltage connected to the REF\_IN pad, or by the input voltage connected to the IN pad. Jumper JU2 provides an option to select the EV kit's  output-voltage regulating source. Table 2 lists the selectable jumper options.

## Table 2. Jumper JU2 Functions

| SHUNT LOCATION      | REF_IN PAD                             | MAX1510 EV KIT OUTPUT VOLTAGE         |
|---------------------|----------------------------------------|---------------------------------------|
| Installed (Default) | Connected to IN                        | Regulates to 0.5 x IN pad voltage     |
| None                | Connected to external reference source | Regulates to 0.5 x REF_IN pad voltage |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX1510 Evaluation Kit

Figure 1. MAX1510 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1510 Evaluation Kit

<!-- image -->

Figure 2. MAX1510 EV Kit Component Placement GuideComponent Side

Figure 3. MAX1510 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 4. MAX1510 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

4

<!-- image -->