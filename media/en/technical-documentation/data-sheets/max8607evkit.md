<!-- lastmod 2022-08-03 -->
## General Description

The MAX8607 evaluation kit (EV kit) is a fully assembled and tested surface-mount printed-circuit board (PCB) for evaluating the MAX8607 1.5A white LED flash/strobe step-up converter IC. The EV kit accepts a 2.7V to 5.5V input voltage and drives a Lumileds LXCL-PWF1 white LED with up to 700mA (limited by LED current rating) for  camera flash/strobe in cell phones, PDAs, DSCs, and other handheld devices. The MAX8607 switching frequency is 1MHz, allowing tiny external components. Two logic inputs control four modes of operation: shutdown mode reduces the quiescent current to 0.1µA (typ), movie mode supplies up to 360mA of LED current for  continuous lighting, flash mode supplies up to 700mA of LED current for short-duration lighting during an exposure, and disco mode supplies +5V (at up to 1A) to external circuits while driving the LED with a fixed 80mA current. Flash-mode and movie-mode LED currents are preset to 700mA and 200mA, respectively, in  the  default EV kit configuration. The EV kit also features an on-board pushbutton pulse-generator circuit to simulate a 600ms flash pulse for flash-mode evaluation.

Caution: The MAX8607 EV kit is capable of driving the LED at very high brightness. Use caution when observing LED illumination.

| DESIGNATION                | QTY                        | DESCRIPTION                                                                                |
|----------------------------|----------------------------|--------------------------------------------------------------------------------------------|
| MAX8607 CIRCUIT COMPONENTS | MAX8607 CIRCUIT COMPONENTS | MAX8607 CIRCUIT COMPONENTS                                                                 |
| C1, C2                     | 2                          | 10µF ±20%, 6.3V X5R ceramic capacitors (0603) TDK C1608X5R0J106M                           |
| C3                         | 1                          | 0.1µF ±10%, 16V X5R ceramic capacitor (0402) TDK C1005X5R1C104K                            |
| D1                         | 1                          | White LED, DS49 series (1.64mm x 2.04mm) Lumileds LXCL-PWF1                                |
| JU2                        | 1                          | 5-pin header Sullins PEC36SAAN (36-pin strip, cut to size as needed) Digi-Key S1012E-02-ND |

<!-- image -->

Features

- ♦ 2.7V to 5.5V Input Range
- ♦ Supports Lumileds and Other High-Power White LEDs
- ♦ Independently Programmed Flash/Movie LED Currents

Flash-Mode LED Current up to 1.5A (Preset to 700mA)

Movie-Mode LED Current up to 360mA (Preset to 200mA)

- ♦ Disco Mode with Fixed 5V Output (Up to 1A) and 80mA LED Current
- ♦ TA Derating Function for LED Thermal Protection
- ♦ Output Overvoltage Protection (OVP)
- ♦ Soft-Start Eliminates In-Rush Current
- ♦ 1MHz PWM Operation
- ♦ 0.1µA Shutdown Mode
- ♦ Small Surface-Mount Components
- ♦ Lead-Free and RoHS-Compliant EV Kit
- ♦ Fully Assembled and Tested

## Ordering Information

| PART          | TEMP RANGE    | IC PACKAGE          |
|---------------|---------------|---------------------|
| MAX8607EVKIT+ | 0°C to +70°C* | 14 TDFN (3mm x 3mm) |

## Component List

| DESIGNATION   |   QTY | DESCRIPTION                                                                                               |
|---------------|-------|-----------------------------------------------------------------------------------------------------------|
| JU3           |     0 | Not installed, 2-pin header Sullins PEC36SAAN (36-pin strip, cut to size as needed) Digi-Key S1012E-02-ND |
| L1            |     1 | 2.2µH, 140m Ω , 2.3A inductor (3mm x 3mm x 1.2mm) TOKO FDSE0312-2R2M                                      |
| R1            |     1 | 4.22k Ω ±1% resistor (0402)                                                                               |
| R2            |     1 | 3.57k Ω ±1% resistor (0402)                                                                               |
| R3, R4        |     2 | 100k Ω ±5% resistors (0402)                                                                               |
| U1            |     1 | MAX8607ETD+ (14-pin TDFN, 3mm x 3mm) (Top Mark: ABA)                                                      |
| -             |     1 | Shunt Sullins STC02SYAN                                                                                   |

1

## MAX8607 Evaluation Kit

| DESIGNATION                | QTY                        | DESCRIPTION                                                                                |
|----------------------------|----------------------------|--------------------------------------------------------------------------------------------|
| PULSE-GENERATOR COMPONENTS | PULSE-GENERATOR COMPONENTS | PULSE-GENERATOR COMPONENTS                                                                 |
| C4                         | 1                          | 0.22µF ±10%, 10V X5R ceramic capacitor (0402) TDK C1005X5R1A224K                           |
| C5                         | 1                          | 0.022µF ±10%, 25V X7R ceramic capacitor (0402) TDK C1005X7R1E223K                          |
| D2                         | 1                          | 100V, 250mA diode (SOD523) Central Semiconductor CMOD4448, lead free                       |
| JU1                        | 1                          | 2-pin header Sullins PEC36SAAN (36-pin strip, cut to size as needed) Digi-Key S1012E-02-ND |

## Quick Start

## Recommended Equipment

- 0 to +6V at 5A, variable output power supply
- Two digital voltmeters (DVMs)
- One dummy load capable of sinking 700mA at 5V

## Procedure

The MAX8607 EV kit is fully assembled and tested. Follow the steps below to verify board operation. Caution: The MAX8607 EV kit is capable of driving the LED at very high brightness. Use caution when observing LED illumination.

- 1) Verify that all shunts are removed from jumper JU2 to place the MAX8607 in shutdown mode.
- 2) Verify that jumper JU1 is open.
- 3) Preset the power supply to 3.6V and turn off. Caution: Do not turn on the power supply until all connections are completed.

## Component List (continued)

| DESIGNATION   |   QTY | DESCRIPTION                                      |
|---------------|-------|--------------------------------------------------|
| R5            |     1 | 100k Ω ±5% resistor (0402)                       |
| R6            |     1 | 4.99k Ω ±1% resistor (0402)                      |
| SW1           |     1 | Momentary pushbutton switch Panasonic EVQ-PHP03T |
| U2            |     1 | MAX6422XS22+ (4-pin SC70)                        |
| -             |     3 | Shunts Sullins STC02SYAN                         |
| -             |     1 | PCB: MAX8607 Evaluation Kit+                     |

- 4) Connect the positive terminal of the power supply to the VIN pad on the EV kit. Connect the negative terminal of the power supply to the GND pad on the EV kit.
- 5) Connect the positive terminal of a DVM to the VIN pad on the EV kit, and connect the negative terminal of that DVM to the GND pad on the EV kit. This DVM measures the voltage at VIN (VVIN).
- 6) Connect the positive terminal of the other DVM to the VOUT pad on the EV kit, and connect the negative terminal of that DVM to the GND pad on the EV kit.  This  DVM measures the voltage at VOUT (VVOUT).
- 7) Turn on the power supply.
- 8) Verify that the VOUT DVM measures approximately VVIN and the LED (D1) is off.

## Component Suppliers

| SUPPLIER                    | COMPONENT          | PHONE        | WEBSITE                    |
|-----------------------------|--------------------|--------------|----------------------------|
| Central Semiconductor Corp. | Schottky diodes    | 631-435-1110 | www.centralsemi.com        |
| Digi-Key Corp.              | Headers            | 800-344-4539 | www.digikey.com            |
| Lumiled.com                 | LEDs               | 408-964-2900 | www.lumiled.com            |
| Murata Mfg. Co. Ltd.        | Capacitors         | 770-436-1300 | www.murata.com             |
| Panasonic Corp.             | Resistors/Switches | 714-373-7366 | www.maco.panasonic.co.jp   |
| Sullins Electronics Corp.   | Headers            | 760-744-0125 | www.sullinselectronics.com |
| Taiyo Yuden                 | Capacitors         | 408-573-4150 | www.t-yuden.com            |
| TDK Corp.                   | Capacitors         | 888-835-6646 | www.component.tdk.com      |
| TOKO                        | Inductors          | 408-432-8281 | www.toko.com               |

Note: Indicate that you are using the MAX8607 when contacting these component suppliers.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<!-- image -->

- 9) Place a shunt between pins 2-3 of jumper JU2. This places the MAX8607 in movie mode.
- 10) Verify  that  D1  is  illuminated  and  the  VOUT  DVM measures a slightly greater voltage than the VIN DVM.
- 11) Sweep the input voltage from 2.7V to 5.5V as indicated on the VIN DVM. Verify that D1 remains illuminated with constant brightness.
- 12) Adjust the power supply to 3.6V.
- 13) Remove the shunt on jumper JU2 and place the shunt between pins 3-4 of jumper JU2. This places the MAX8607 in disco mode.
- 14) Verify  that  D1  is  illuminated.  Verify  that  the  VOUT DVM measures approximately +5V.
- 15) Connect the 700mA dummy load between the VOUT and GND pads on the EV kit. Turn on the dummy load.
- 16) Sweep the power supply from 2.7V to 5.5V as indicated on the VIN DVM. Verify that the LED module remains illuminated and the VOUT DVM measures approximately +5V. At VIN voltages greater than +5V, VVOUT is boosted slightly higher than VVIN.
- 17) Turn off and disconnect the dummy load from VOUT and GND.
- 18) Set the power supply to 3.6V.
- 19) Place a shunt on pins 1-2 of jumper JU1 to connect the pushbutton circuit to the MAX8607.
- 20) Remove the shunt from jumper JU2 and place it between pins 1-2 of jumper JU2. Place a second shunt between pins 4-5 of jumper JU2. This places the MAX8607 in flash mode.
- 21) Push the button (SW1) located on the lower section of the EV kit. This creates a strobe/flash pulse.
- 22) Verify that D1 flashes.

## Table 1. JU1 and JU2 Jumper Configurations*

| JU1 SHUNT POSITION   | JU2 SHUNT POSITION   | EN1 STATE                                | EN2 STATE                                | MAX8607 OUTPUT MODE   |
|----------------------|----------------------|------------------------------------------|------------------------------------------|-----------------------|
| Not installed        | Not installed        | Low (connected to GND)                   | Low (connected to GND)                   | Shutdown mode         |
| Not installed        | 2-3                  | High (connected to VIN)                  | Low (connected to GND)                   | Movie mode            |
| Not installed        | 3-4                  | Low (connected to GND)                   | High (connected to VIN)                  | Disco mode            |
| Installed            | 1-2 and 4-5          | Connected to pulse generator through JU1 | Connected to pulse generator through JU1 | Flash mode            |

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8607 Evaluation Kit

## Detailed Description

## Mode-Select Inputs and Jumper Selection

Mode select inputs EN1 and EN2 provide control for selecting between shutdown mode, movie mode, disco mode, and flash mode. Jumper JU2 configures the connections for EN1 and EN2 on the EV kit board (see Table 1 for jumper configurations). Drive EN1 and EN2 low to place the IC into a low-power shutdown mode. Drive EN1 high and EN2 low to enable movie mode. In movie mode, the MAX8607 maintains LED current at 1200 times the current set by R2 (Figure 1). See the Setting the Movie-Mode LED Current section for details on setting the movie-mode current. Drive EN1 low and EN2 high to enable disco mode. In disco mode, the output of the step-up converter provides a regulated +5V at up to 1A for external circuitry, while the LED current is regulated to 80mA. The LED current is not adjustable in disco mode. Install jumper JU1 and pulse EN1 and EN2 with the pulse-generation circuit to activate flash mode. In flash mode, the current through the LED is regulated to 5000 times the current set by R1. The time duration of flash mode is set by the pulse generator. The pulse generator strobes EN\_ (through jumper JU1) when switch SW1 is pressed. See the Setting the Flash-Mode LED Current section for details on setting the flash-mode current. See Changing the Flash Pulse Width section for details on adjusting the flash pulse width.

Instead of using jumper JU2 for mode selection, external digital signals may be used to drive EN1 or EN2 by removing all shunts from jumper JU2 and connecting the  external  signal  to  the  appropriate  EN\_  pad. Note: Jumper JU2 must be open if EN1 or EN2 are externally driven.

## MAX8607 Evaluation Kit

## Setting the Movie-Mode LED Current

The movie-mode LED current, ILED(MOVIE), is preset to 200mA in the default EV kit configuration and is set by resistor R2. To program movie-mode LED current to a different value, select and install a new value of R2 by using the following equation:

<!-- formula-not-decoded -->

where ILED(MOVIE) is the desired movie-mode LED current in amps.

The MAX8607 EV kit is capable of movie-mode currents up to 360mA.

## Setting the Flash-Mode LED Current

The LED current in flash mode, ILED(FLASH), is preset to 700mA in the default EV kit configuration and is set by resistor  R1.  To  program flash-mode LED current to a different value, select and install a new value of R1 by using the following equation:

<!-- formula-not-decoded -->

where ILED(FLASH) is the desired LED flash current in amps.

The MAX8607 EV kit is capable of flash-mode currents up to 1.5A, depending on the current rating of the LED used.

## Changing the Flash Pulse Width

The MAX8607 EV kit includes a pushbutton pulse-generation circuit for evaluating flash mode. The flash pulse width is determined by capacitor C4. To change the pulse width of the flash, replace C4 with a capacitor corresponding to the following equation:

<!-- formula-not-decoded -->

where tPULSE is the desired pulse width in µs and C4 is given in µF. The minimum pulse width of the pulse generator is 1000µs.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## Evaluating Off-Board LEDs

The MAX8607 EV kit allows for easy evaluation of offboard LEDs. To evaluate off-board LEDs, first cut the trace shorting jumper JU3, or remove the installed LED (D1). Next, connect the anode of the LED under evaluation to the pad labeled VOUT on the EV kit and connect the cathode of that LED to the EV kit pad labeled LED. The LED is then ready for evaluation using the MAX8607 EV kit.

## Ambient Temperature Derating Function

The MAX8607 limits the maximum LED current depending on its die temperature. Once the die temperature reaches +40°C, the LED current decreases by 1.67% per °C. This corresponds to approximately 0mA of LED current at +100°C. Due to the package's exposed paddle, the die temperature is very close to the PCB temperature. The temperature-derating function allows the LED current to be set higher at normal operating temperatures, thereby allowing either a brighter flash or movie light to be used for normal ambient temperatures.

## MAX8607 Evaluation Kit

Figure 1. MAX8607 EV Kit Schematic

<!-- image -->

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

## MAX8607 Evaluation Kit

<!-- image -->

Figure 2. MAX8607 EV Kit Component Placement GuideComponent Side

Figure 3. MAX8607 EV Kit PCB Layout-Component Side

<!-- image -->

Figure 4. MAX8607 EV Kit PCB Layout-Solder Side

<!-- image -->

Maxim cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim product. No circuit patent licenses are implied. Maxim reserves the right to change the circuitry and specifications without notice at any time.

6