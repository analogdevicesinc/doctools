<!-- lastmod 2022-08-02 -->
## General Description

The MAX1945 evaluation kit (EV kit) is a fully assembled and tested surface-mount circuit board that contains a high-efficiency step-down switching-regulator circuit for applications requiring on-board postregulation. The circuit utilizes a MAX1945R regulator featuring ± 4% voltage margining and is configured for a 1.8V output voltage. The circuit provides up to 6A of current. A 2.6V to 5.5V DC source can be utilized to power the circuit's input.

The MAX1945R IC features an internal power MOSFET switch and an internal synchronous rectifier. The MAX1945 EV kit provides connections for the SYNC input. It also provides an output to synchronize another MAX1945 EV kit clock 180 degrees out-of-phase. Pulsewidth modulated (PWM) operation at 500kHz allows the use of tiny surface-mount components.

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                         |
|---------------|-------|---------------------------------------------------------------------|
| C1            |     1 | 100µF ± 20%, 8V polymer capacitor (7.3 x 4.3) Panasonic EEFUE0K101R |
| C2            |     1 | 180µF ± 20%, 4V polymer capacitor (7.3 x 4.3) Panasonic EEFUE0G181R |
| C3, C6, C7    |     3 | 0.1µF ± 10%, 10V X7R ceramic capacitors (0603) AVX 0603ZC104KAT     |
| C4            |     1 | 0.22µF ± 10%, 6.3V X7R ceramic capacitor (0603) AVX 06036C224KAT    |
| C5            |     1 | 100pF ± 5%, 50V COG ceramic capacitor (0603) TDK C1608COG1H101JT    |
| C8            |     1 | 1µF ± 10%, 16V X7R ceramic capacitor (1206) TDK C3216X7R1C105KT     |
| D1            |     1 | 100mA, 30V Schottky diode (SOD-523) Central Semiconductor CMOSH-3   |
| J1            |     0 | Scope probe connector (not installed) FCI 33JR135-1                 |
| JU1, JU2, JU3 |     3 | 2-pin headers                                                       |

## Quick Start

## Required Equipment

The following equipment is required before beginning:

- One 2.6V to 5.5V power supply capable of providing 5A
- One voltmeter

The MAX1945 EV kit is fully assembled and tested. Follow these steps to verify board operation. Do not turn on the power supply until all connections are completed:

## 1.8V Output Voltage (Nominal)

- 1) Verify that jumpers JU1 (CTL1) and JU2 (CTL2) do not have shunts across their respective pins.
- 2) Verify that a shunt is across the pins of jumper JU3 (SYNC).
- 3) Verify  that  jumper  JU4  (FBSEL, 1.8V) has a shunt installed across pins 2 and 3.
- 4) Connect the voltmeter to the VOUT and PGND pads.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Maxim Integrated Products

For pricing, delivery, and ordering information, please contact Maxim/Dallas Direct! at 1-888-629-4642, or visit Maxim's website at www.maxim-ic.com.

1

<!-- image -->

Features

- ♦ 0.970in x 0.840in Circuit Footprint
- ♦ 2.6V to 5.5V Input Range
- ♦ Output Voltage 1.8V/2.5V Preset 0.8V to 0.85x VIN Adjustable
- ♦ Provides Up to 6A Output Current
- ♦ ±4% Voltage Margining
- ♦ Internal Power Switch and Synchronous Rectifier
- ♦ 500kHz/1MHz PWM Selectable Switching Frequency
- ♦ SYNC Input: Synchronizes from 400kHz to 1.2MHz TTL/CMOS Clock
- ♦ SYNC Output: Drives 2nd MAX1945 Switching 180 Degrees Out-of-Phase
- ♦ All Surface-Mount Components
- ♦ Fully Assembled and Tested

## Ordering Information

| PART         | TEMP RANGE   | IC PACKAGE   |
|--------------|--------------|--------------|
| MAX1945EVKIT | 0°C to +70°C | 28 TSSOP-EP* |

* EP = Exposed pad.

## MAX1945 Evaluation Kit

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                  |
|---------------|-------|----------------------------------------------|
| JU4           |     1 | 3-pin header                                 |
| L1            |     1 | 1.2µH, 9A inductor Sumida CDRH8D43 4783-T010 |
| R1            |     1 | 0 Ω ± 5% resistor (0603)                     |
| R2            |     0 | Not installed, resistor (0603)               |
| R3            |     1 | 180k Ω ± 5% resistor (0603)                  |
| R4            |     1 | 10 Ω ± 5% resistor (0805)                    |
| R5, R6, R7    |     3 | 100k Ω ± 5% resistors (0603)                 |
| U1            |     1 | MAX1945REUI, 28-pin TSSOP-EP                 |
| None          |     4 | Shunts (JU1-JU4)                             |
| None          |     1 | MAX1945 PC board                             |

- 5) Connect the 2.6VDC to 5.5VDC power supply to the VIN pad. Connect the supply ground to the PGND pad.
- 6) Turn on the power supply and verify that the output voltage at VOUT is 1.8V.

For instructions on selecting the feedback resistors for other output voltages, see the Evaluating Other Output Voltages section.

## Detailed Description

The MAX1945 EV kit contains a step-down switchingregulator circuit providing 1.8V and up to 6A at the output. The circuit can be powered from a DC power supply with an input range of 2.6V to 5.5V and supply up to 5A of current.

The circuit utilizes a MAX1945R regulator IC with ± 4% voltage margining and is configured for a 1.8V output. The output voltage is set to 1.8V by JU4 (FBSEL), external divider resistor R1, and the MAX1945R internal resistor-dividers. The output can be reconfigured for other output voltages. The voltage margining and shut- down features are controlled by two multifeature jumpers (JU1, JU2). The output voltage can be configured to operate at 1.8V (nominal), 1.87V (+4%), or 1.73V (-4%).

The MAX1945R IC in a TSSOP-EP package features an internal power MOSFET switch and an internal synchronous rectifier. The EV kit's four-layer PC board has copper pads under the IC and vias connecting to the PGND layer (layer 2) to dissipate heat away from the IC.  This  enables  the  EV  kit  to  operate  at  high  current ratings.

The MAX1945 EV kit is configured to switch at 500kHz. The EV kit can be reconfigured to switch at 1MHz or use an external TTL/CMOS digital clock source. PC board pads are provided for the MAX1945 IC's SYNC input and SYNCOUT signals. A second MAX1945 EV kit's SYNC input can be fed from the SYNCOUT signal. This enables the second MAX1945 to switch 180 degrees out-of-phase relative to the first MAX1945R IC.

An oscilloscope jack (J1) can be installed on the EV kit to  obtain accurate voltage transient response and output ripple measurement. Obtain the jack from the manufacturer  listed  in  the Component  List for Designation J1.

## Jumper Selection

## Shutdown Mode/Voltage Margining Control

The MAX1945 EV kit has two jumpers providing multifeature configurations. JU1 and JU2 configure the shutdown mode that reduces the MAX1945 quiescent current and voltage-margining modes. The voltagemargining modes allow the output to be shifted to a higher or lower supply tolerance. Table 1 lists the selectable jumper options for the shutdown and voltage-margining modes.

## Synchronization and Frequency Selection

The MAX1945 EV kit provides a jumper to select the switching frequency of the MAX1945R IC. Additionally, the MAX1945R can be synchronized to an external

## Component Suppliers

| SUPPLIER              | PHONE        | FAX          | WEBSITE               |
|-----------------------|--------------|--------------|-----------------------|
| AVX                   | 843-946-0238 | 843-626-3123 | www.avxcorp.com       |
| Central Semiconductor | 631-435-1110 | 631-435-1824 | www.centralsemi.com   |
| Panasonic             | 714-373-7366 | 714-737-7323 | www.panasonic.com     |
| Sumida USA            | 847-545-6700 | 847-545-6720 | www.sumida.com        |
| TDK                   | 847-803-6100 | 847-390-4405 | www.component.tdk.com |

Note: Please indicate that you are using the MAX1945 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Table 1. Jumpers JU1, JU2 Functions

| IC CTL1 PIN JUMPER JU1 (SHUNT)   | IC CTL2 PIN JUMPER JU2 (SHUNT)   | MAX1945 EV KIT OUTPUT VOLTAGE   | MAX1945 STATUS              |
|----------------------------------|----------------------------------|---------------------------------|-----------------------------|
| Connected to V CC (none)         | Connected to V CC (none)         | 1.8V (nominal output)           | MAX1945 is enabled          |
| Connected to GND (installed)     | Connected to V CC (none)         | 1.87V (+4% voltage margining)   | MAX1945 is enabled          |
| Connected to V CC (none)         | Connected to GND (installed)     | 1.73V (-4% voltage margining)   | MAX1945 is enabled          |
| Connected to GND (installed)     | Connected to GND (installed)     | 0V (output is OFF)              | MAX1945 is in shutdown mode |

Table 2. Jumper JU3 Functions

| SHUNT LOCATION              | SYNC PIN                       | MAX1945 FREQUENCY                                        |
|-----------------------------|--------------------------------|----------------------------------------------------------|
| None                        | Connected to V CC              | 1MHz switching frequency                                 |
| Installed                   | Connected to GND               | 500kHz switching frequency                               |
| None; external clock source | Connected to SYNC PC board pad | External TTL/CMOS digital clock provides synchronization |

TTL/CMOS digital clock. JU3 selects the switching frequency  or  synchronization  source  for  the MAX1945R. Table 2 lists the jumper options.

## Clock Selection (SYNC Input)

The MAX1945 EV kit's circuit can be synchronized to an external TTL/CMOS digital clock using the SYNC and GND PC board pads. The external clock provides a square wave with the following signal specifications:

- Output voltage: Logic high = 1.6V (min) to 5V (max) Logic low = 0V (min) to 0.4V (max)
- Output frequency: 400kHz to 1.2MHz
- ·
- Duty cycle: 10% to 90%

JU3 must be reconfigured for the external clock (see Table 2).

<!-- image -->

## Dual Power-Supply Design (SYNCOUT)

The MAX1945 EV kit features a PC board pad for the SYNCOUT signal connection to evaluate a dual postregulated power-supply design. Utilizing the SYNCOUT signal as a TTL/CMOS digital clock to drive a second  MAX1945  EV  kit  enables  the  second MAX1945R to switch 180 degrees out-of-phase relative to the first EV kit. The second MAX1945 EV kit's SYNC input is driven by the SYNCOUT of the first EV kit. JU3 must be properly configured on both EV kits. The first MAX1945 EV kit should be configured for 500kHz switching frequency. The second EV kit must be configured for an external TTL/CMOS digital clock (see Table 2).  Use  the  GND pad near the SYNC and SYNCOUT pads on both EV kits for the clock GND.

## Output Voltage Selection

The MAX1945 EV kit provides a jumper to select the output voltage that the EV kit can provide. JU4 configures the EV kit for outputs of 1.8V, 2.5V, or an output voltage determined by the R1 and R2 resistor-divider. Table 3 lists the jumper options.

## Evaluating Other Output Voltages

The MAX1945 EV kit step-down switching regulator output is set to 1.8V by an internal feedback resistor pair, resistor R1, and JU4. To generate output voltages other than 1.8V (0.8V to 0.85x VIN), select different external voltage-divider resistors R1 and R2. JU4 must also be reconfigured. See Table 3 for configuring the EV kit for other output voltages. Refer to the Setting the Output Voltages section in the MAX1945 data sheet for instructions on selecting feedback resistors R1 and R2, and compensation components R3 and C5.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1945 Evaluation Kit

## MAX1945 Evaluation Kit

## Table 3. Jumper JU4 Functions

| SHUNT LOCATION   | FBSEL PIN         | FB PIN                               | MAX1945 EV KIT OUTPUT                    |
|------------------|-------------------|--------------------------------------|------------------------------------------|
| 1, 2             | Connected to V CC | Connected to VOUT                    | 2.5V, resistor R1 = 0 Ω                  |
| 2, 3             | Connected to GND  | Connected to VOUT                    | 1.8V, resistor R1 = 0 Ω                  |
| None *           | Floating *        | VOUT regulates when FB pin is 0.8V * | Output voltage set by resistors R1, R2 * |

Figure 1. MAX1945 EV Kit Schematic

<!-- image -->

4

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

Figure 2. MAX1945 EV Kit Component Placement GuideSolder Side

<!-- image -->

Figure 4. MAX1945 EV Kit PC Board Layout-Component Side

<!-- image -->

## MAX1945 Evaluation Kit

Figure 3. MAX1945 EV Kit Component Placement GuideComponent Side

<!-- image -->

Figure 5. MAX1945 EV Kit PC Board Layout-Inner Layer, Ground Plane

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX1945 Evaluation Kit

Figure 6. MAX1945 EV Kit PC Board Layout-Inner Layer, Power Plane

<!-- image -->

Figure 7. MAX1945 EV Kit PC Board Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6