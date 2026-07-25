<!-- lastmod 2022-08-05 -->
## General Description

The MAX1543 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that provides the voltages and features required for active-matrix, thin-film  transistor  (TFT)  liquid-crystal  displays  (LCDs). The EV kit contains a step-up switching regulator, a positive two-stage charge pump for the TFT gate-on supply, and a negative single-stage charge pump for the  TFT  gate-off  supply.  Also  included  are  two  operational  amplifiers  that  can  be  used  to  drive  the  LCD backplane (VCOM) or the gamma-correction divider string,  and  a  logic-controlled,  high-voltage  switch  with adjustable delay. The EV kit also evaluates the MAX1542 after IC replacement.

The EV kit operates from a DC supply voltage of +2.6V to +5.5V. The step-up switching regulator is configured for a +8V output providing at least 250mA. The positive charge pump is configured for a +22V output providing at least 20mA. The negative charge pump is configured for a -7V output providing at least 20mA. The two operational amplifiers are both configured for +4V, each capable of providing up to ±150mA peak. The highvoltage switch can be used to delay the startup of the positive charge pump's output. The delay time is set with an external capacitor.

The MAX1543 EV kit demonstrates low quiescent current and high efficiency (85%) for maximum battery life. Operation at 1.2MHz allows the use of tiny surfacemount components. The MAX1543 QFN package (0.8mm maximum height) with low-profile external components allows this circuit to be less than 1.25mm high.

## Component List

| DESIGNATION    |   QTY | DESCRIPTION                                                           |
|----------------|-------|-----------------------------------------------------------------------|
| C2, C7, C8, C9 |     0 | Capacitors (0603), not installed                                      |
| C3             |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (1206) TDK C3216X5R0J106K-0.85  |
| C4, C5         |     2 | 4.7µF ±10%, 10V X5R ceramic capacitors (1210) TDK C3225X5R1A475K-1.15 |
| C6             |     1 | 220pF ±10%, 50V X7R ceramic capacitor (0603) TDK C1608X7R1H221K       |
| C10            |     1 | 0.033µF ±10%, 25V X7R ceramic capacitor (0603) TDK C1608X7R1E333K     |

## Procedure

- 1) Verify there is no shunt across jumper JU1.
- 2) Verify there is a shunt installed across jumper JU2.
- 3) Connect the positive terminal of the power supply to the  VIN  pad.  Connect the negative terminal of the power supply to the GND pad.
- 4) Turn on the power supply and verify the step-up switching regulator output (VMAIN) is +8V.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products 1

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

<!-- image -->

## Features

- ♦ +2.6V to +5.5V Input Range
- ♦
- Output Voltages +8V Output at 300mA (3V Input Step-Up Switching Regulator) +22V Output at 20mA (Positive Charge Pump) -7V Output at 20mA (Negative Charge Pump) +4V Output at ±150mA (Operational Amplifiers VOUT1 and VOUT2)
- ♦ Resistor-Adjustable Switching Regulator and Op-Amp Output Voltages
- ♦ Logic-Controlled, High-Voltage Switch with Adjustable Delay
- ♦ Greater than 85% Efficiency (Step-Up Switching Regulator)
- ♦ Selectable 600kHz/1.2MHz Step-Up Switching Frequency
- ♦ Low-Profile Surface-Mount Components
- ♦ Also Evaluates the MAX1542 (IC Replacement Required)
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE                  |
|--------------|--------------|-----------------------------|
| MAX1543EVKIT | 0°C to +70°C | 20 TQFN (5mm x 5mm x 0.8mm) |

## Quick Start

The MAX1543 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed.

## Recommended Equipment

- +2.6V to +5.5V, 2A DC power supply
- Voltmeter

## MAX1543 Evaluation Kit

| DESIGNATION       |   QTY | DESCRIPTION                                                                    |
|-------------------|-------|--------------------------------------------------------------------------------|
| C11-C16, C18, C19 |     8 | 0.1µF ±10%, 50V X7R ceramic capacitors (0603) TDK C1608X7R1H104K               |
| C17               |     1 | 100µF ±20%, 16V aluminum electrolytic capacitor (6.3mm x 5mm) Sanyo 16MV100UAX |
| D1                |     1 | 1A, 30V Schottky diode (S-flat) Toshiba CRS02                                  |
| D2, D3, D4        |     3 | 200mA, 100V dual ultra-fast diodes (SOT23) Fairchild MMBD4148SE                |

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                               |
|---------------|-------|-------------------------------------------|
| L1            |     1 | 4.7µH, 1.1A inductor Sumida CLS5D11HP-4R7 |
| R1            |     1 | 169k Ω ±1% resistor (0805)                |
| R2            |     1 | 30.9k Ω ±1% resistor (0805)               |
| R3-R6         |     4 | 100k Ω ±1% resistors (0805)               |
| R7, R9, R18   |     3 | 100k Ω ±5% resistors (0805)               |
| R13-R17, R19  |     0 | Resistors (0805), not installed           |
| U1            |     1 | MAX1543ETP (20-pin TQFN)                  |
| JU1, JU2      |     2 | 2-pin headers                             |
| None          |     2 | Shunts (JU1, JU2)                         |
| None          |     1 | MAX1543 PC board                          |

## Component Suppliers

| SUPPLIER   | PHONE        | FAX          | WEBSITE               |
|------------|--------------|--------------|-----------------------|
| Fairchild  | 888-522-5372 | N/A          | www.fairchildsemi.com |
| Sanyo      | 619-661-6322 | 619-661-1055 | www.sanyovideo.com    |
| Sumida     | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| TDK        | 847-803-6100 | 847-390-4405 | www.component.tdk.com |
| Toshiba    | 949-455-2000 | 949-859-3963 | www.toshiba.com/taec  |

Note: Please indicate that you are using the MAX1543 when contacting these component suppliers.

- 5) Verify  the  gate-on  supply  (GON) is approximately +22V.
- 6) Verify  the  gate-off  supply  (GOFF)  is  approximately -7V.
- 7) Verify the operational amplifier output 1 (VOUT1) is +4V.
- 8) Verify the operational amplifier output 2 (VOUT2) is +4V.
- 9) Verify the high-voltage switch output (COM) is +22V.

For instructions on selecting the step-up switching regulator feedback and op-amp divider resistors for other output voltages, see the Output Voltage Selection section.

## Detailed Description

The MAX1543 EV kit contains a step-up switching regulator, a positive two-stage charge pump, a negative single-stage charge pump, two operational amplifiers, and a high-voltage switch matrix. The EV kit operates from a DC power supply between +2.6V and +5.5V that can provide at least 2A. The switching frequency is jumper selectable between 600kHz and 1.2MHz. The EV kit also evaluates the MAX1542 after replacing IC U1.

As configured, the step-up switching regulator (VMAIN) generates a +8V output and can provide at least 250mA from a +2.6V input. It also provides at least 300mA from a +3.0V input and 500mA from a +5V input.  The  step-up switching-regulator output voltage can be adjusted up to +13V with other feedback resistors (see the Output-Voltage Selection section).

The GON supply consists of two positive charge-pump stages to generate approximately +22V and can provide greater than 20mA. The GOFF supply consists of a single negative charge-pump stage to generate approximately -7V and can provide greater than 20mA.

The operational amplifier outputs, VOUT1 and VOUT2, are set to +4V and can source or sink approximately 150mA. These two outputs can be reconfigured to other voltages by changing the voltage-divider resistors (see the Output-Voltage Selection section).

The high-voltage switch between the SRC and COM pins can be used to delay the GON output startup. The GON voltage is connected to the source of the switch (SRC),

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

and the drain of the switch (COM) is used as an output. The startup delay time is set with an external capacitor at the DEL pin. Refer to the Delay Control Circuit section in the MAX1543 data sheet for information on setting the delay time.

The switch between the SRC and COM pins and the switch between the COM and DRN pins can be controlled by jumper JU2 or by external logic connected to the CTL pad. See Table 2 for switch states and refer to the Delay Control Circuit section in the MAX1543 data sheet for further information about the high-voltage switches connected to the COM pin.

The MAX1543 EV kit also evaluates the MAX1542. To evaluate the MAX1542, replace U1 with a MAX1542 IC (refer to the MAX1542/MAX1543 data sheet for specifications of the MAX1542).

## Jumper Selection

## Switching-Frequency Selection (FREQ)

The MAX1543 EV kit features an option to choose the step-up regulator switching frequency. Jumper JU1 selects the switching frequency. Table 1 lists the selectable jumper options. The EV kit is configured for 1.2MHz operation. Optimum performance at lower frequencies requires a larger inductor value (refer to the

## Table 1. Jumper JU1 Functions

| SHUNT LOCATION   | FREQ PIN                    | MAX1543 EV KIT FREQUENCY   |
|------------------|-----------------------------|----------------------------|
| None (default)   | Connected to VIN through R7 | 1.2MHz                     |
| Installed        | Connected to GND            | 600kHz                     |

## Table 2. Jumper JU2 Functions

| SHUNT LOCATION      | CTL PIN                       | MAX1543 COM                                                                   | MAX1542 COM                                                                                    |
|---------------------|-------------------------------|-------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------|
| Installed (default) | Connected to VIN              | COM connected to SRC (GON, +22V)                                              | COM connected to SRC (GON, +22V)                                                               |
| None                | Connected to PGND through R18 | COM connected to DRN                                                          | COM disconnected from SRC (GON, +22V)                                                          |
| None                | Connected to external logic   | Logic low, COM connected to DRN; logic high, COM connected to SRC (GON, +22V) | Logic low, COM disconnected from SRC (GON, +22V); logic high, COM connected to SRC (GON, +22V) |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1543 Evaluation Kit

Inductor Selection section in the MAX1542/MAX1543 data sheet).

## High-Voltage Switch Control (CTL)

The MAX1543 EV kit features an option to control the high-voltage switches between SRC, COM, and DRN on the MAX1543 or the high-voltage switch between SRC and COM on the MAX1542. Table 2 lists the selectable JU2 jumper options.

## Output-Voltage Selection

## Step-Up Switching-Regulator Output Voltage (VMAIN)

The MAX1543 EV kit's step-up switching-regulator output (VMAIN) is set to +8V by feedback resistors R1 and R2. To generate output voltages other than +8V (up to +13V), select different external voltage-divider resistors, R1 and R2. Note that changing the VMAIN voltage setting also changes the GON and GOFF charge-pump output voltages. Output capacitors C4 and C5 are rated for +10V. To set the output voltage greater than +10V, use higher voltage-rated capacitors. Refer to the Main Step-Up Converter and Output Voltage sections in the MAX1542/MAX1543 data sheet for instructions on selecting resistors R1 and R2.

## Operational-Amplifier Output Voltages (VOUT1 and VOUT2)

The MAX1543's operational amplifiers are configured as unity-gain buffers by the PC board traces shorting R14 between NEG1 and OUT1 and R16 between NEG2 and OUT2. The voltages at the noninverting inputs POS1 and POS2 are set to half of VMAIN by voltagedivider resistors (R3, R4) and (R5, R6), respectively. To set VOUT1 and VOUT2 to other voltages (up to VMAIN), select different divider resistors.

## MAX1543 Evaluation Kit

Figure 1. MAX1543 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1543 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 4. MAX1543 EV Kit PC Board Layout-GND Layer 2

<!-- image -->

## MAX1543 Evaluation Kit

Figure 3. MAX1543 EV Kit PC Board Layout-Component Side

<!-- image -->

Figure 5. MAX1543 EV Kit PC Board Layout-VCC Layer 3

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1543 Evaluation Kit

Figure 6. MAX1543 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600