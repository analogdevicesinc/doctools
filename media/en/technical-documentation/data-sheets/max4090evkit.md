<!-- lastmod 2022-08-03 -->
## General Description

The MAX4090 evaluation kit (EV kit) provides a proven design to evaluate the MAX4090 3V/5V, 6dB video buffer  with  sync-tip  clamp.  The  MAX4090 video input terminals have a 75 Ω termination resistor to ground, and the output terminals have a 75 Ω back-termination resistor.  The  EV  kit  operates  from  a  single  2.7V  to  5V DC power supply.

The MAX4090 EV kit uses the sag correction configuration.  The  video  input  and  output  signals  on  the  EV  kit are AC-coupled.

The MAX4090 can also be used to drive DC-coupled, 150 Ω back-terminated video loads in portable video applications. See the Output Signal section to use the MAX4090 as a DC-coupled output driver.

The MAX4090  EV  kit PCB  comes  with the MAX4090AAUT+ installed. The MAX4090 EV kit can also be used to evaluate the MAX4090EUT+. Contact the factory for free samples of the pin-compatible MAX4090EUT+ device.

| DESIGNATION   |   QTY | DESCRIPTION                                                        |
|---------------|-------|--------------------------------------------------------------------|
| C1, C2        |     2 | 0.1µF ±10%, 16V X7R ceramic capacitors (0603) TDK C1608X7R1C104K   |
| C3, C4        |     2 | 22µF ±10%, 16V X5R ceramic capacitors (1210) Murata GRM32ER61C226K |
| C5            |     1 | Not installed, capacitor (6.3mm x 6mm)                             |
| C6            |     1 | 10µF ±10%, 6.3V X5R ceramic capacitor (0603) Murata GRM188R60J106K |

<!-- image -->

Features

- ♦ Output Amplifiers with a +6dB Gain
- ♦ Single 2.7V to 5V Supply Operation
- ♦ Jumper-Selectable Enable/Shutdown
- ♦ AC-Coupled Inputs
- ♦ DC- or AC-Coupled Outputs
- ♦ Standard 75 Ω Input/Output Terminations
- ♦ Surface-Mount Components
- ♦ Lead(Pb)-Free and RoHS Compliant
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TYPE   |
|---------------|--------|
| MAX4090EVKIT+ | EV Kit |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                   |
|---------------|-------|---------------------------------------------------------------|
| IN, OUT       |     2 | 75 Ω BNC female jacks                                         |
| JU1           |     1 | 3-pin header                                                  |
| R1, R2        |     2 | 75 Ω ±1% resistors (0603)                                     |
| U1            |     1 | Video buffer with sync-tip clamp (6 SOT23) Maxim MAX4090AAUT+ |
| -             |     1 | Shunt                                                         |
| -             |     1 | MAX4090 Evaluation Kit+                                       |

## Component Suppliers

| SUPPLIER                               | PHONE        | WEBSITE                     |
|----------------------------------------|--------------|-----------------------------|
| Murata Electronics North America, Inc. | 770-436-1300 | www.murata-northamerica.com |
| TDK Corp.                              | 847-803-6100 | www.component.tdk.com       |

Note:

Indicate that you are using the MAX4090 when contacting these component suppliers.

1

## MAX4090 Evaluation Kit

## Quick Start

## Recommended Equipment

- 5V, 50mA DC power supply (VCC)
- Video signal generator (e.g., Tektronix TG-700 or similar)
- Video measurement equipment (e.g., Tektronix VM700T or similar)

## Procedure

The MAX4090 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: Do not turn on the power supply until all connections are completed.

- 1) Verify that a shunt is installed on jumper JU1 in the 1-2 position (MAX4090A enabled).
- 2) Connect the output of the video signal generator to the IN BNC connector on the MAX4090 EV kit.
- 3) Connect the OUT BNC connector on the EV kit to the input of the video measurement equipment.
- 4) Connect the power-supply ground to the GND pad on the EV kit.
- 5) Connect the 5V DC power supply to the VCC pad on the EV kit.
- 6) Set the video signal generator for the desired video input signal.
- 7) Turn on the power supply and enable the video signal generator.
- 8) Analyze the video output signal with the video measurement equipment.

## Detailed Description of Hardware

The MAX4090 evaluation kit (EV kit) provides a proven design to evaluate the MAX4090 3V/5V, 6dB video buffer with sync-tip clamp. The MAX4090 video input terminals have a 75 Ω termination resistor to ground, and the output terminals have a 75 Ω back-termination resistor.

The MAX4090 EV kit uses the sag correction configuration.  The  video  input  and  output  signals  on  the  EV  kit are AC-coupled.

The MAX4090 can also be used to drive DC-coupled, 150 Ω back-terminated video loads in portable video applications. See the Output Signal section to use the MAX4090 as a DC-coupled output driver.

## Output Signal

By default, the MAX4090 EV kit is configured in the sag correction configuration and the output is AC-coupled. To DC-couple the outputs, short the C3 and C4 capacitors. To AC-couple the output without using the sag correction configuration, short the C3 and C4 capacitors, cut the short on C5, and install a 220µF capacitor on C5.

## Jumper Selection

## Shutdown Mode ( SHDN )

Jumper JU1 controls the shutdown pin ( SHDN )  of  the MAX4090A IC. See Table 1 for shunt positions.

## Table 1. JU1 Jumper Selection ( SHDN )

| SHUNT POSITION   | DESCRIPTION                                         |
|------------------|-----------------------------------------------------|
| 1-2*             | SHDN pin connected to VCC MAX4090A enabled          |
| 2-3              | SHDN pin connected to GND MAX4090A in shutdown mode |

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4090 Evaluation Kit

Figure 1. MAX4090 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4090 Evaluation Kit

Figure 2. MAX4090 EV Kit Component Placement Guide-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

## MAX4090 Evaluation Kit

<!-- image -->

Figure 3. MAX4090 EV Kit PCB Layout-Component Side

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX4090 Evaluation Kit

Figure 4. MAX4090 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6

Maxim Integrated Products, 120 San Gabriel Drive, Sunnyvale, CA  94086 408-737-7600

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_