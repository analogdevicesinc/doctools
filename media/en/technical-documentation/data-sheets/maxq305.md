<!-- lastmod 2022-08-03 -->
<!-- image -->

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## General Description

The MAXQ305 is a reduced supply voltage, low-power, 16-bit  MAXQ M microcontroller  designed  for  low-power applications including universal remote controls, consumer electronics, and white goods. The MAXQ305 combines  a  powerful  16-bit  RISC  microcontroller  and integrated  peripherals  including  two  USART  ports  and a SPI master/slave communications port, along with an IR module with carrier frequency generation and flexible port  I/O  capable  of  multiplexed  keypad  control.  The MAXQ305 includes 80KB of flash program memory and 2KB of data SRAM.

The MAXQ305 can run from a low supply input voltage of 0.9V, allowing the microcontroller to be powered by a single alkaline AA battery. Code execution can run at up to a 12MHz rate, or the execution speed may optionally be decreased to 4MHz (Green Mode) to reduce power consumption. In this mode, the IR timer and modulator continue to run at 12MHz for maximum compatibility with existing IR application code.

For the ultimate in low-power battery-operated performance, the MAXQ305 includes an ultra-low-power stop  mode  (0.4 F A,  typ).  In  this  mode,  the  minimum amount of circuitry is powered. Wake-up sources include external interrupts, the power-fail interrupt, and the wakeup timer interrupt.

## Applications

Remote Controls

Battery-Powered Portable Equipment

Consumer Electronics

Home Appliances

White Goods

Ordering Information/Selector Guide appears at end of data sheet.

MAXQ is a registered trademark of Maxim Integrated Products, Inc.

## Features

- S High-Performance, Low-Power 16-Bit RISC Core
- S 0.9V to 3.6V Operating Voltage Range
- S DC to 12MHz for Code Execution in Performance Mode
- S 16-Bit Instruction Word, 16-Bit Data Bus
- S 16 x 16-Bit General-Purpose Working Registers
- S Secure MMU for Application Partitioning and IP Protection
- S Memory Features
-  80KB Program Flash Memory
-  2KB Data SRAM
- S Additional Peripherals
-  Power-Fail Warning
-  Power-On Reset/Brownout Reset
-  Automatic IR Carrier Frequency Generation and Modulation
-  One IR Diode Direct Drive Pin
-  Two High Current Visual LED Direct Drive Pins
-  Two 16-Bit, Programmable Timers/Counters
-  One SPI Port and Two USART Ports
-  Programmable Watchdog Timer
-  8kHz Nanopower Ring Oscillator Wake-Up Timer
-  Up to 32 General-Purpose I/Os
- S Low Power Consumption
-  0.4µA (typ), 2.0µA (max) in Stop Mode, T A  = +25°C
-  1.36mA (typ) in Green Mode (Code Execution at 4MHz)

## Block Diagram

<!-- image -->

Note: Some revisions of this device may incorporate deviations from published specifications known as errata. Multiple revisions of any device may be simultaneously available through various sales channels. For information about device errata, go to: www.maximintegrated.com/errata .

For related parts and recommended products to use with this part, refer to: www.maximintegrated.com/MAXQ305.related

For pricing, delivery, and ordering information, please contact Maxim Direct at 1-888-629-4642, or visit Maxim Integrated's website at www.maximintegrated.com.

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## ABSOLUTE MAXIMUM RATINGS

Voltage Range of V DD  with Respect to GND ......-0.3V to +3.6V Voltage Range on Any Lead with Respect to GND except V DD   ........ -0.3V to (V DD  + 0.5V) Continuous Power Dissipation (T A  = +70 N C) TQFN (derate 37mW/ N C above +70 N C).....................2963mW

| Operating Temperature Range.......................... -20 N C to +70 N C   |
|----------------------------------------------------------------------------|
| Storage Temperature Range............................ -65 N C to +150 N C  |
| Lead Temperature (soldering, 10s) ................................+300 N C |
| Soldering Temperature (TQFN only, reflow) ...................+260 N C      |

Stresses beyond those listed under 'Absolute Maximum Ratings' may cause permanent damage to the device. These are stress ratings only, and functional operation of the device at these or any other conditions beyond those indicated in the operational sections of the specifications is not implied. Exposure to absolute maximum rating conditions for extended periods may affect device reliability.

## PACKAGE THERMAL CHARACTERISTICS (Note 1)

TQFN

Junction-to-Ambient Thermal Resistance ( B JA )  ..........27 N C/W

Junction-to-Case Thermal Resistance ( B JC )  .................1 N C/W

Note 1: Package thermal resistances were obtained using the method described in JEDEC specification JESD51-7, using a fourlayer board. For detailed information on package thermal considerations, refer to www.maxim-ic.com/thermal-tutorial .

## RECOMMENDED OPERATING CONDITIONS

(V DD   =  V DD(MIN)   to  V DD(MAX) ,  T A   =  -20 N C  to  +70 N C,  typical  T A   =  +25°C,  V DD(TYP) ,  unless  otherwise  noted.  Specifications  to T A  = -20°C are guaranteed by design and are not production tested.)

| PARAMETER                                      | SYMBOL     | CONDITIONS                                                                            | MIN   |   TYP |   MAX | UNITS   |
|------------------------------------------------|------------|---------------------------------------------------------------------------------------|-------|-------|-------|---------|
| Supply Voltage                                 | V DD       |                                                                                       | V RST |   1.5 |   3.6 | V       |
| Supply Voltage (High Voltage Mode)             | V DD_HV    | HVREN = HVRMD = 1                                                                     | 1.2   |       |       | V       |
| Supply Voltage (Performance Mode)              | V DD_PFM   | HVREN = HVRMD = PFMSEL = 1, f SYSCLK = f HFXIN = 12MHz                                | 1.2   |       |       | V       |
| Regulator Output                               | V REGOUT_1 | HVRMD = 0                                                                             | 1.26  |   1.4 |  1.54 | V       |
| Regulator Output                               | V REGOUT_2 | HVRMD = 1                                                                             |       |   1.8 |       | V       |
| Power-Fail Warning Voltage for Supply (Note 2) | V PFW      | Monitors V DD                                                                         | 0.95  |   1.0 |  1.05 | V       |
| Power-Fail Reset Voltage                       | V RST      | Monitors V DD                                                                         | 0.9   | 0.925 |  0.95 | V       |
| Power-On Reset Voltage                         | V POR      | Monitors V DD                                                                         |       |   0.8 |       | V       |
| RAM Data-Retention Voltage                     | V DRV      | (Note 3)                                                                              | 0.7   |       |       | V       |
| Active Current                                 | I DD_1     | Source clock = 12MHz, Sysclk = 4MHz (green mode), HVREN = HVRMD = PFMSEL = 0 (Note 4) |       |  1.36 |       | mA      |
| Active Current                                 | I DD_2     | Source clock = 12MHz, Sysclk = 4MHz (green mode), HVREN = HVRMD = PFMSEL = 0 (Note 4) |       |    10 |       | mA      |
| Active Current During Flash Programming        | I DD_FP    | V DD = V RST to 1.0V, f SYSCLK = 4MHz, HVREN = HVRMD = PFMSEL = 0                     |       |    10 |       | mA      |

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## RECOMMENDED OPERATING CONDITIONS (continued)

(V DD   =  V DD(MIN)   to  V DD(MAX) ,  T A   =  -20 N C  to  +70 N C,  typical  T A   =  +25°C,  V DD(TYP) ,  unless  otherwise  noted.  Specifications  to T A  = -20°C are guaranteed by design and are not production tested.)

| PARAMETER                                                          | SYMBOL   | CONDITIONS                                | MIN         | TYP                            | MAX            | UNITS   |
|--------------------------------------------------------------------|----------|-------------------------------------------|-------------|--------------------------------|----------------|---------|
| Stop Mode Current                                                  | I STOP1  | Power-fail off, T A = +25 N C             |             | 0.4                            | 3.5            | F A     |
| Stop Mode Current                                                  | I STOP1  | Power-fail off, T A = 0 to +70 N C        |             | 0.4                            | 12             | F A     |
| Stop Mode Current                                                  | I STOP2  | Power-fail on, T A = +25 N C              |             | 22                             |                | F A     |
| Stop Mode Current                                                  | I STOP2  | Power-fail on, T A = 0 to +70 N C         |             | 22                             |                | F A     |
| Current Consumption During Power-Fail                              | I PFR    | (Note 5)                                  | ((3 x I (I  | STOP2 ) + ((PCI STOP1 + I NANO | - 3) x )))/PCI | F A     |
| Power Consumption During Power-On Reset                            | I POR    | (Note 6)                                  |             | 100                            |                | nA      |
| Stop-Mode Resume Time (Note 7)                                     | t ON     | V DD R 1.5V V DD < 1.5V                   |             | 375 550                        |                | F s     |
| Power-Fail Monitor Startup Time                                    | t PFM_ON |                                           |             | 150                            |                | F s     |
| Power-Fail Warning Detection Time                                  | t PFW    | (Note 8)                                  |             | 10                             |                | F s     |
| Input Low Voltage for IRTX, IRRX, HFXIN, RESET, and All Port Pins  | V IL     |                                           | V GND       |                                | 0.3 x V DD     | V       |
| Input High Voltage for IRTX, IRRX, HFXIN, RESET, and All Port Pins | V IH     |                                           | 0.7 x V DD  |                                | V DD           | V       |
| Input Hysteresis (Schmitt)                                         | V IHYS   | V DD R 1.5V                               |             | 300                            |                | mV      |
| IRRX Input Filter Pulse-Width                                      | t IRRX_R | V DD < 1.5V                               |             | 50                             | 50             | ns      |
| Reject IRRX Input Filter Pulse-Width                               | t IRRX_A |                                           | 300         |                                |                |         |
| Accept                                                             |          |                                           |             |                                |                | ns      |
| Output Low Voltage for RESET and All Port Pins (Note 9)            | V OL     | V DD = 3.6V, I OL = 11mA                  |             | 0.4                            | 0.5            | V       |
| Output Low Voltage for RESET and All Port Pins (Note 9)            | V OL     | V DD = 2.35V, I OL = 8mA                  |             | 0.4                            | 0.5            | V       |
| Output Low Voltage for RESET and All Port Pins (Note 9)            | V OL     | V DD = 1.85V, I OL = 4.5mA                |             | 0.4                            | 0.5            | V       |
| Output Low Voltage for RESET and All Port Pins (Note 9)            | V OL     | V DD = 0.9V, I OL = 20 F A                |             | 0.1                            | 0.15           | V       |
| Output High Voltage for RESET and All Port Pins (Note 9)           | V OH     | V DD = 1.62V to 3.6V, I OH = 2mA          | V DD - 0.5  |                                | V DD           | V       |
| Output High Voltage for RESET and All Port Pins (Note 9)           | V OH     | V DD = 0.9V, I OH = 20 F A                | V DD - 0.15 |                                | V DD           | V       |
| IRTX Reference Current                                             | I IRTX   | Constant used to calculate IRTX drive     |             | 100                            |                | mA      |
| LED Reference Current                                              | I LED    | Constant used to calculate LED[1:0] drive |             | 5                              |                | mA      |

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## RECOMMENDED OPERATING CONDITIONS (continued)

(V DD   =  V DD(MIN)   to  V DD(MAX) ,  T A   =  -20 N C  to  +70 N C,  typical  T A   =  +25°C,  V DD(TYP) ,  unless  otherwise  noted.  Specifications  to T A  = -20°C are guaranteed by design and are not production tested.)

| PARAMETER                                          | SYMBOL                              | CONDITIONS                          | MIN                                 | TYP                                 | MAX                                 | UNITS                               |
|----------------------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|-------------------------------------|
| Input/Output Pin Capacitance for All Port Pins     | C IO                                | (Note 3)                            |                                     | 15                                  |                                     | pF                                  |
| Input Leakage Current                              | I L                                 | Internal pullup disabled            | -100                                |                                     | +100                                | nA                                  |
| Input Pullup Resistor for                          |                                     | V DD = 3.0V, V OL = 0.4V            |                                     | 28                                  |                                     | k I                                 |
| RESET , IRRX, All Port Pins                        | R PU                                | V DD = 2.0V, V OL = 0.4V            |                                     | 30                                  |                                     | k I                                 |
| Except P1.6, P1.7 (Note 3)                         |                                     | V DD = 0.9V, V OL = 0.1V            |                                     | 50                                  |                                     | k I                                 |
| EXTERNAL CRYSTAL/RESONATOR                         | EXTERNAL CRYSTAL/RESONATOR          | EXTERNAL CRYSTAL/RESONATOR          | EXTERNAL CRYSTAL/RESONATOR          | EXTERNAL CRYSTAL/RESONATOR          | EXTERNAL CRYSTAL/RESONATOR          | EXTERNAL CRYSTAL/RESONATOR          |
| Crystal/Resonator Frequency                        | f HFXIN                             |                                     |                                     |                                     | 12                                  | MHz                                 |
| Crystal/Resonator Period                           | t HFXIN                             |                                     |                                     | 1/f HFXIN                           |                                     | ns                                  |
| Crystal/Resonator Warm-Up Time                     | t XTAL_RDY                          | From initial oscillation            |                                     | 8192 x t HFXIN                      |                                     | ms                                  |
| Oscillator Feedback Resistor                       | R OSCF                              |                                     | 0.5                                 | 1.0                                 | 1.5                                 | M W                                 |
| EXTERNAL CLOCK INPUT                               | EXTERNAL CLOCK INPUT                | EXTERNAL CLOCK INPUT                | EXTERNAL CLOCK INPUT                | EXTERNAL CLOCK INPUT                | EXTERNAL CLOCK INPUT                | EXTERNAL CLOCK INPUT                |
| External Clock Frequency                           | f XCLK                              |                                     | DC                                  |                                     | 12                                  | MHz                                 |
| External Clock Period                              | t XCLK                              |                                     |                                     | 1/f XCLK                            |                                     | ns                                  |
| External Clock Duty Cycle                          | t XCLK_DUTY                         |                                     | 45                                  |                                     | 55                                  | %                                   |
| System Clock Frequency (Green Mode)                | f CK                                | HFXOUT = GND                        |                                     | f HFXIN /3 f XCLK /3                |                                     | MHz                                 |
| System Clock Period                                | t CK                                |                                     |                                     | 1/f CK                              |                                     | ns                                  |
| 1MHZ RING                                          | 1MHZ RING                           | 1MHZ RING                           | 1MHZ RING                           | 1MHZ RING                           | 1MHZ RING                           | 1MHZ RING                           |
| Nano-Ring Frequency                                | f INTOSC                            |                                     |                                     | 1                                   |                                     | MHz                                 |
| NANO RING                                          | NANO RING                           | NANO RING                           | NANO RING                           | NANO RING                           | NANO RING                           | NANO RING                           |
| Nano-Ring Frequency                                | f NANO                              | T A = +25 N C                       | 3.0                                 | 8.0                                 | 20.0                                | kHz                                 |
| Nano-Ring Current                                  | I NANO                              | V DD = 0.85V to 1.70V               |                                     | 250                                 |                                     | nA                                  |
| WAKE-UP TIMER                                      | WAKE-UP TIMER                       | WAKE-UP TIMER                       | WAKE-UP TIMER                       | WAKE-UP TIMER                       | WAKE-UP TIMER                       | WAKE-UP TIMER                       |
| Wake-Up Timer Interval                             | t WAKEUP                            |                                     | 1/f NANO                            |                                     | 65535/f NANO                        | s                                   |
| RECOMMENDED FLASH MEMORY PARAMETERS                | RECOMMENDED FLASH MEMORY PARAMETERS | RECOMMENDED FLASH MEMORY PARAMETERS | RECOMMENDED FLASH MEMORY PARAMETERS | RECOMMENDED FLASH MEMORY PARAMETERS | RECOMMENDED FLASH MEMORY PARAMETERS | RECOMMENDED FLASH MEMORY PARAMETERS |
| System Clock During Flash Programming/Erase        | f FPSYSCLK                          | RGSL = 0                            | 2                                   |                                     |                                     | MHz                                 |
| Flash Programming Voltage                          | V FPROG                             | (Note 10)                           | 1.2                                 |                                     |                                     | V                                   |
|                                                    | t ME                                | Mass erase                          | 20                                  |                                     | 40                                  | ms                                  |
| Flash Erase Time (Note 11)                         | t ERASE                             | Page erase                          | 20                                  |                                     | 40                                  |                                     |
| Flash Programming Time Per Word Write/Erase Cycles | t PROG                              | (Notes 3, 11)                       | 20 20,000                           |                                     | 100                                 | F s Cycles                          |
| Data Retention                                     |                                     | T A = +25 N C                       | 100                                 |                                     |                                     | Years                               |

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## RECOMMENDED OPERATING CONDITIONS (continued)

(V DD   =  V DD(MIN)   to  V DD(MAX) ,  T A   =  -20 N C  to  +70 N C,  typical  T A   =  +25°C,  V DD(TYP) ,  unless  otherwise  noted.  Specifications  to T A  = -20°C are guaranteed by design and are not production tested.)

| PARAMETER            | SYMBOL   | CONDITIONS        | MIN   |   TYP | MAX             | UNITS   |
|----------------------|----------|-------------------|-------|-------|-----------------|---------|
| IR                   |          |                   |       |       |                 |         |
| Carrier Frequency    | f IRX    | External crystal  |       |       | f HFXIN /2 f /2 | Hz      |
| Carrier Frequency    | f IRC    | External clock    |       |       | XCLK            |         |
| IR Transmission Rate | fIR_RATE | IRIOCN.IRRATE = 0 |       |     1 |                 | MHz     |

Note 2: The VPFW level can be programmed to one of a range of trip points as defined by PWCN.PFWARNCN[1:0]. The values listed in the Recommended Operating Conditions table are for the default configuration of 1.0V (nominal) Q 5%.

Note 3: Guaranteed by design, not production tested.

Note 4: Measured on the V DD  pin with the device not in reset. All inputs are tied to GND or V DD . Outputs do not source/sink any current. Part is executing code from flash memory.

Note 5: The power check interval (PCI) can be set to check once every 1024, 2048, or 4096 nano-ring clock cycles. If the PCI is set to check every clock cycle, then this value will be equal to I STOP The power check interval (PCI) can be set to always on, 1024, 2048, or 4096 nano-ring clock cycles.

Note 6: Current consumption during POR when powering up while V DD  is less than the POR release voltage.

Note 7: After typical startup time, and before the completion of an 8192 t HFXIN  crystal warmup period, the microcontroller runs off of a 1MHz ring oscillator.

Note 8: The minimum amount of time that  V DD  must be below V PFW  before a power-fail event is detected; refer to the user's guide for detailed information.

Note 9: The maximum total current, I OH(MAX)  and I OL(MAX) , for all listed outputs combined, should not exceed 32mA to satisfy the maximum specified voltage drop. This does not include the IRTX or LED outputs.

Note 10: Do not write to flash memory while V DD  &lt; V DD \_HV(MIN) . The flash memory write functions in the utility ROM attempt to enable the high voltage mode if not already enabled, and return an error code if V DD  &lt; V DD \_HV(MIN) .

Note 11 : Programming time does not include overhead associated with utility ROM interface.

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## Pin Configuration

<!-- image -->

## Pin Description

| PIN        | PIN        |            |                                                                                                                                                                                                                                                         |
|------------|------------|------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BARE DIE   | TQFN       | NAME       | FUNCTION                                                                                                                                                                                                                                                |
| POWER PINS | POWER PINS | POWER PINS | POWER PINS                                                                                                                                                                                                                                              |
| 16         | 14         | V DD       | Supply Voltage.                                                                                                                                                                                                                                         |
| 14         | 12         | GND        | Ground . Connect directly to the ground plane.                                                                                                                                                                                                          |
| 5, 31      | EP         | GND        | Ground-Exposed Pad . The exposed pad is found only on the TQFN packages. It should be connected directly to the ground plane.                                                                                                                           |
| 19         | 17         | REGOUT     | Internal Regulator Output . This pin must be connected to ground through a 1.0 F F external ceramic chip capacitor. The capacitor must be placed as close to this pin as possible. No devices other than the capacitor should be connected to this pin. |
| 17         | 15         | FC+        | 2x Charge-Pump Capacitor Pins . Connect a 270nF external capacitor between FC+ and FC-.                                                                                                                                                                 |
| 15         | 13         | FC-        | 2x Charge-Pump Capacitor Pins . Connect a 270nF external capacitor between FC+ and FC-.                                                                                                                                                                 |

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## Pin Description (continued)

| PIN              | PIN              |                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|------------------|------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BARE DIE         | TQFN             | NAME             | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 18               | 16               | VDCX2            | 2x Charge-Pump Output . Connect a 4.7 F F external capacitor between this pin and ground. No devices other than the capacitor should be connected to this pin, except for functional circuitry related to LED0, LED1, IRTX drive and IRRX input.                                                                                                                                                                                                                                                                                                                               |
| 13               | 11               | VDCX3            | 3x Charge-Pump Output. Connect a 2nF external capacitor between this pin and ground. No devices other than the capacitor should be connected to this pin.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| 8                | 6                | RESET            | Digital, Active-Low, Reset Input/Output . The MAXQ305 remains in reset as long as this pin is low and begins executing from the Utility ROM at address 8000h when this pin returns to a high state. This pin includes a pullup current source; if this pin is driven by an external device, it should be driven by an open-drain source capable of sinking in excess of 4mA. This pin may be left unconnected if there is no need to place the MAXQ305 in a reset state using an external signal. This pin is driven low as an output when an internal reset condition occurs. |
| 6                | 4                | HFXOUT           | High-Frequency Crystal Input Pins . Connect an external crystal or resonator between HFXIN and HFXOUT for use as the high-frequency system clock source. Alternatively, connect HFXOUT to ground when an external, high-frequency clock source is connected to the HFXIN pin.                                                                                                                                                                                                                                                                                                  |
| 7                | 5                | HFXIN            | High-Frequency Crystal Input Pins . Connect an external crystal or resonator between HFXIN and HFXOUT for use as the high-frequency system clock source. Alternatively, connect HFXOUT to ground when an external, high-frequency clock source is connected to the HFXIN pin.                                                                                                                                                                                                                                                                                                  |
| IR FUNCTION PINS | IR FUNCTION PINS | IR FUNCTION PINS | IR FUNCTION PINS                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| 44               | 38               | IRRX             | IR Receive Input . IR receiver pin.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 45               | 39               | IRTX             | IR Transmit Output . Active-low IR transmit pin. This pin defaults to a high-impedance input with the weak pullup disabled during all forms of reset. Software must configure this pin after release from reset to remove the high-impedance input condition.                                                                                                                                                                                                                                                                                                                  |

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## Pin Description (continued)

| PIN                                           | PIN                                           | NAME                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|-----------------------------------------------|-----------------------------------------------|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BARE DIE                                      | TQFN                                          | NAME                                          | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| GENERAL-PURPOSE I/O AND SPECIAL FUNCTION PINS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTION PINS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTION PINS | GENERAL-PURPOSE I/O AND SPECIAL FUNCTION PINS                                                                                                                                                                                                                                                                                                                                                                                                                                               | GENERAL-PURPOSE I/O AND SPECIAL FUNCTION PINS                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|                                               |                                               |                                               | Port 0 General-Purpose Digital I/O Pins . These port pins function as general-purpose I/O pins with their input and output states controlled by the PD0, PO0, and PI0 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All special functions must be enabled from software before they can be used.                                                               | Port 0 General-Purpose Digital I/O Pins . These port pins function as general-purpose I/O pins with their input and output states controlled by the PD0, PO0, and PI0 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All special functions must be enabled from software before they can be used.                                                               |
|                                               |                                               |                                               | GPIO PORT PIN                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SPECIAL FUNCTIONS                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 39                                            | 33                                            | P0.0/INT0/IRTXM                               | P0.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT0/IR Modulator Output                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 38                                            | 32                                            | P0.1/INT1/RX0                                 | P0.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT1/USART 0 Receive                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 37                                            | 31                                            | P0.2/INT2/TX0                                 | P0.2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT2/USART 0 Transmit                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 35                                            | 30                                            | P0.3/INT3/RX1                                 | P0.3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT3/USART 1 Receive                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 33                                            | 29                                            | P0.4/INT4/TX1                                 | P0.4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT4/USART 1 Transmit                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 32                                            | 28                                            | P0.5/INT5/TBA0/TBA1                           | P0.5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT5/Type B Timer 0 Pin A or Type B Timer 1 Pin A                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 30                                            | 27                                            | P0.6/INT6/TBB0                                | P0.6                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT6/Type B Timer 0 Pin B                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 29                                            | 26                                            | P0.7/INT7/TBB1                                | P0.7                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT7/Type B Timer 1 Pin B                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                                               |                                               |                                               | Port 1 General-Purpose Digital I/O Pins . These port pins function as general-purpose I/O pins with their input and output states controlled by the PD1, PO1, and PI1 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All special functions must be enabled from software before they can be used (Note that P1.6 and P1.7 do not support the weak pullup mode). | Port 1 General-Purpose Digital I/O Pins . These port pins function as general-purpose I/O pins with their input and output states controlled by the PD1, PO1, and PI1 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All special functions must be enabled from software before they can be used (Note that P1.6 and P1.7 do not support the weak pullup mode). |
|                                               |                                               |                                               | GPIO PORT PIN                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | SPECIAL                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| 1                                             | 44                                            | P1.3/INT11                                    | P1.3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT11                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 2                                             | 1                                             | P1.2/INT10                                    | P1.2                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT10                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 3                                             | 2                                             | P1.1/INT9                                     | P1.1                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT9                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 4                                             | 3                                             | P1.0/INT8                                     | P1.0                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT8                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 46                                            | 40                                            | P1.7/INT15/LED1                               | P1.7 (No weak pullup mode)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | INT15/LED1 Output                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 47                                            | 41                                            | P1.6/INT14/LED0                               | P1.6 (No weak pullup mode)                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | INT14/LED0 Output                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 48                                            | 42                                            | P1.5/INT13                                    | P1.5                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT13                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 49                                            | 43                                            | P1.4 / INT12                                  | P1.4                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | INT12                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## Pin Description (continued)

| PIN        | PIN   | NAME            |                                                                                                                                                                                                                                                                                                                                                                                                                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|------------|-------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| BARE DIE   | TQFN  | NAME            | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                 | FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|            |       |                 | Port 2 General-Purpose Digital I/O Pins . These port pins function as general-purpose I/O pins with their input and output states controlled by the PD2, PO2 and PI2 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All special functions must be enabled from software before they can be used.                             | Port 2 General-Purpose Digital I/O Pins . These port pins function as general-purpose I/O pins with their input and output states controlled by the PD2, PO2 and PI2 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All special functions must be enabled from software before they can be used.                             |
|            |       |                 | GPIO PORT PIN                                                                                                                                                                                                                                                                                                                                                                                                                                            | SPECIAL FUNCTION                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| 9          | 7     | P2.0/INT16/MOSI | P2.0                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT16/SPI Master Out Slave In                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 10         | 8     | P2.1/INT17/MISO | P2.1                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT17/SPI Master In Slave Out                                                                                                                                                                                                                                                                                                                                                                                                                            |
| 11         | 9     | P2.2/INT18/SCLK | P2.2                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT18/SPI Clock                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| 12         | 10    | P2.3/INT19/SSEL | P2.3                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT19/SPI Slave Select                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 24         | 22    | P2.4/INT20/TCK  | P2.4                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT20/JTAG Test Clock                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 25         | 23    | P2.5/INT21/TDI  | P2.5                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT21/JTAG Test Data In                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| 27         | 24    | P2.6/INT22/TMS  | P2.6                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT22/JTAG Test Mode Select                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 28         | 25    | P2.7/INT23/TDO  | P2.7                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT23/JTAG Test Data Out                                                                                                                                                                                                                                                                                                                                                                                                                                 |
|            |       |                 | Port 3 General-Purpose Digital I/O Pins with Interrupt Capability . These port pins function as general-purpose I/O pins with their input and output states controlled by the PD3, PO3 and PI3 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All external interrupts must be enabled from software before they can be used. | Port 3 General-Purpose Digital I/O Pins with Interrupt Capability . These port pins function as general-purpose I/O pins with their input and output states controlled by the PD3, PO3 and PI3 registers. All port pins default to high-impedance mode after a reset. Software must configure these pins after release from reset to remove the high-impedance condition. All external interrupts must be enabled from software before they can be used. |
|            |       |                 | GPIO PORT PIN                                                                                                                                                                                                                                                                                                                                                                                                                                            | EXTERNAL INTERRUPT                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| 20         | 18    | P3.0/INT24      | P3.0                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT24                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 21         | 19    | P3.1/INT25      | P3.1                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT25                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 22         | 20    | P3.2/INT26      | P3.2                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT26                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 23         | 21    | P3.3/INT27      | P3.3                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT27                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 26, 34, 36 | -     | N.C.            | No Connection.                                                                                                                                                                                                                                                                                                                                                                                                                                           | No Connection.                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| 40         | 34    | P3.4/INT28      | P3.4                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT28                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 41         | 35    | P3.5/INT29      | P3.5                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT29                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 42         | 36    | P3.6/INT30      | P3.6                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT30                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| 43         | 37    | P3.7/INT31      | P3.7                                                                                                                                                                                                                                                                                                                                                                                                                                                     | INT31                                                                                                                                                                                                                                                                                                                                                                                                                                                    |

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## Detailed Description

The MAXQ305  microcontroller provides integrated, low-cost solutions that simplify the design of IR communications  equipment  such  as  universal  remote controls. Standard features include the highly optimized, single-cycle, MAXQ 16-bit RISC core, 80KB of program flash  memory,  2KB  of  data  RAM,  a  soft  stack,  16 general-purpose registers, and three data pointers. The MAXQ  core  offers  the  industry's  best  MIPS/mA  rating, allowing  developers  to  achieve  the  same  performance as  competing  microcontrollers  at  substantially  lower clock  rates.  Combining  reduced  active-mode  current with  the  MAXQ305  stop-mode  current  (0.4 F A,  typical) results  in  increased  battery  life.  Application-specific peripherals  include  flexible  timers  for  generating  IR carrier  frequencies  and  modulation,  a  high-current  IR drive  pin,  two  LED  drive  pins,  general-purpose  I/O pins  ideal  for  keypad  matrix  input,  and  a  power-faildetection circuit to notify the application when the supply voltage is nearing the minimum operating voltage of the microcontroller.

At  the  heart  of  the  MAXQ305  is  the  MAXQ  16-bit  RISC core. The MAXQ305 operates from DC to 12MHz (with an internal system clock of 4MHz maximum in Green Mode) and  most  instructions  execute  in  a  single  clock  cycle, enabling  nearly  1MIPS/MHz  operation.  When  active device operation is not required, an ultra-low-power stop mode can be invoked from software, resulting in quiescent current consumption of less than 0.4 F A (typ) and 2.0 F A (max). The combination of high-performance instructions and  ultra-low  stop-mode  current  increases  battery  life over  competing  microcontrollers.  An  integrated  POR circuit  with  brownout  support  resets  the  device  to  a known condition following a power-up cycle or brownout condition.  Additionally,  a  power-fail  warning  flag  is set  and  a  power-fail  interrupt  can  be  generated  when the  system  voltage  falls  below  the  power-fail  warning voltage, V PFW . The power-fail warning feature allows the application to notify the user that the system supply is low and appropriate action should be taken.

## Microprocessor

The  MAXQ305  is  based  on  Maxim's  low-power,  16-bit MAXQ family of RISC cores. The core supports the Harvard memory architecture with separate 16-bit  program  and data  address  buses.  A  fixed  16-bit  instruction  word  is standard, but data can be arranged in 8 or 16 bits. The MAXQ  core  is  implemented  as  a  pipelined  processor with  performance  approaching  1MIPS/MHz.  The  16-bit data path is implemented around register modules, and each register module contributes specific functions to the core. The accumulator module consists of sixteen 16-bit registers and is tightly coupled with the arithmetic logic unit  (ALU). A configurable soft stack supports program flow.

Execution  of  instructions  is  triggered  by  data  transfer between functional register modules or between a  functional  register  module  and  memory.  Because data  movement  involves  only  source  and  destination modules, circuit-switching activities are limited to active modules  only.  For  power-conscious  applications,  this approach  localizes  power  dissipation  and  minimizes switching noise. The modular architecture also provides a maximum of flexibility and reusability that is important for a microprocessor used in embedded applications.

The  MAXQ  instruction  set  is  highly  orthogonal.  All arithmetical and logical operations can use any register in  conjunction  with  the  accumulator.  Data  movement is supported from any register to any other register. Memory is accessed through specific data-pointer registers with automatic increment/decrement support.

## Power Conditioning

The  MAXQ305 uses  a  power  conditioning  block  to provide the various voltage levels and current sources for the micro core, peripherals and IR diode. To support this, four additional pins are required to provide external caps for the charge pump. Figure 1 illustrates the generalized architecture of the power conditioning block.

To  conserve  power,  the  main  charge  pump  is  not enabled at all times. Instead a 1.7V comparator enables the charge pump only long enough to achieve the 1.7V needed to drive the IR diode. This voltage level is then

Figure 1. Analog Power Conditioning Block

<!-- image -->

## Memory Protection

The optional memory-protection feature separates code memory  into  three  areas:  system,  user  loader,  and user application. Code in the system area can be kept confidential.  Code  in  the  user  areas  can  be  prevented from reading and writing system code. The user loader can also be protected from user application code.

Memory protection is implemented using privilege levels for  code.  Each  area  has  an  associated  privilege  level. RAM/ROM  are  assigned  privilege  levels  as  well.  See Table 1.

## Stack Memory

The  soft  stack  stores  program  return  addresses  (for subroutine  calls and  interrupt  handling)  and  other general-purpose  data.  This  soft  stack  is  located  in  the 2KB SRAM data memory, which means that the SRAM

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

used to derive the 1.6V minimum crystal oscillator voltage and the 1.4V ( Q 0.2V) core voltage.

To  support  flash  program  and  erase  operations,  the power conditioning block bumps the main charge-pump voltage  output  up  slightly  and  muxes  the  analog  LDO output  to  the  flash  supply  pins  to  provide  adequate voltage levels to the flash to support programming. The IR diode should not be activated when programming the flash as the current capacity supplied by the main charge pump  well  capacitor  is  used  to  supply  the  flash  with sufficient current in this mode. This makes flash program/ erase and IR diode operation mutually exclusive.

## Memory

The MAXQ305 incorporates several memory types that include the following:

- 80KB	program	flash	memory
- 2KB	SRAM	data	memory
- 6KB	utility	ROM
- Soft	stack

data  memory  must  be  shared  between  the  soft  stack and general-purpose application data storage. However, the location and size of the soft stack is determined by the  user,  providing  maximum  flexibility  when  allocating resources for a particular application. The stack is used automatically by the processor when the CALL, RET, and RETI  instructions  are  executed  and  when  an  interrupt is  serviced.  An  application  can  also  store  and  retrieve values explicitly using the stack by means of the PUSH, POP, and POPI instructions.

The  SP  pointer  indicates  the  current  top  of  the  stack, which initializes by default to the top of the SRAM data memory. As values are  pushed  onto  the  stack,  the  SP pointer decrements, which means that the stack grows downward  towards  the  bottom  (lowest  address)  of  the data memory. Popping values off the stack causes the SP pointer value to increase.

## Utility ROM

The utility ROM is a 6KB block of internal ROM memory located in program space beginning at address 8000h. This ROM includes the following routines:

- In-system	 programming	 (bootstrap	 loader)	 using JTAG interface
- In-circuit	debugging	routines	using	JTAG	interface
- Production	test	routines	(internal	memory	tests,	mem -ory  loader,  etc.)  These  are  used  for  internal  testing only, and are generally of no use to the end-application developer.
- User-callable	 routines	 for	 in-application	 flash	 pro -gramming, buffer copying and fast table lookup. More information  on  these  routines  can  be  found  in  the MAXQ305 User's Guide .

Following any reset, execution begins in the utility ROM at  address 8000h. At this point, unless loader mode or test  mode  has  been  invoked  (which  requires  special programming  via  the  JTAG  interface),  the  utility  ROM always automatically jumps to location 0000h, which is

## Table 1. Memory Areas and Associated Maximum Privilege Levels

| AREA             | PAGE ADDRESS   | MAXIMUM PRIVILEGE LEVEL   |
|------------------|----------------|---------------------------|
| System           | 0 to ULDR-1    | High                      |
| User Loader      | ULDR to UAPP-1 | Medium                    |
| User Application | UAPP to top    | Low                       |
| Utility ROM      | N/A            | High                      |
| Other (RAM)      | N/A            | Low                       |

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

the beginning of user application code in program flash memory.

Some applications require protection against unauthorized  viewing  of  program  code  memory.  For these  applications,  access  to  in-system  programming, in-application programming  or  in-circuit  debugging functions  is  prohibited  until  a  password  has  been supplied.  Three  different  password  locks  are  provided, each of  which  can  be  used  to  protect  a  different  area of  memory  (system  memory,  user  loader  and  user application).  Each  password  lock  is  controlled  by  a 16-word area of flash memory; if the password is set to all  FFFFh  values  or  all  0000h  values,  the  password  is disabled.  Otherwise,  the  password  is  active  and  must be matched by the user of the bootloader or debugger before  access  is  granted  to  the  corresponding  area  of flash  program  memory.  Refer  to  the MAXQ305  User's Guide for more details.

## Watchdog Timer

The  internal  watchdog  timer  greatly  increases  system reliability. The timer resets the device if software execution is disturbed. The watchdog timer is a free-running counter designed  to  be  periodically  reset  by  the  application software.  If  software  is  operating  correctly,  the  counter is  periodically  reset  and  never  reaches  its  maximum count.  However,  if  software  operation  is  interrupted, the timer does not reset, triggering a system reset and optionally  a  watchdog  timer  interrupt.  This  protects  the system against electrical noise or electrostatic discharge (ESD)  upsets  that  could  cause  uncontrolled  processor operation. The internal watchdog timer is an upgrade to older designs with external watchdog devices, reducing system cost and simultaneously increasing reliability.

The watchdog timer functions as the source of both the watchdog timer timeout and the watchdog timer reset. The timeout period can be programmed in a range of 2 15  to 2 24  system clock cycles. An interrupt is generated when the timeout period expires if the interrupt is enabled. All

## Table 2. Watchdog Interrupt Timeout

|   WD[1:0] | WATCHDOG CLOCK   | WATCHDOG INTERRUPT TIMEOUT   |   WATCHDOG RESET AFTER WATCHDOG INTERRUPT (µs) |
|-----------|------------------|------------------------------|------------------------------------------------|
|        00 | Sysclk/2 15      | 2.7ms                        |                                           42.7 |
|        01 | Sysclk/2 18      | 21.9ms                       |                                           42.7 |
|        10 | Sysclk/2 21      | 174.7ms                      |                                           42.7 |
|        11 | Sysclk/2 24      | 1.4s                         |                                           42.7 |

watchdog timer resets follow the programmed interrupt timeouts  by  512  system  clock  cycles.  If  the  watchdog timer is not restarted for another full interval in this time period,  a  system  reset  occurs  when  the  reset  timeout expires. See Table 2.

## IR Carrier Generation and Modulation Timer

The dedicated IR timer/counter module simplifies low-speed  infrared  (IR)  communication.  The  IR  timer implements  two  pins  (IRTX  and  IRRX)  for  supporting IR transmit and receive, respectively. The IRTX pin has no corresponding port pin designation, so the standard PD, PO, and PI port control status bits are not present. However, the IRTX pin output can be manipulated high or low using the PWCN.IRTXOUT and PWCN.IRTXOE bits when the IR timer is not enabled (i.e., IREN = 0).

The IR timer is composed of a carrier generator and a carrier  modulator.  The  carrier  generation  module  uses the  16-bit  IR  carrier  register  (IRCA)  to  define  the  high and  low  time  of  the  carrier  through  the  IR  carrier  high byte  (IRCAH)  and  IR  carrier  low  byte  (IRCAL).  The carrier modulator uses the IR data bit (IRDATA) and IR modulator time register (IRMT) to determine whether the carrier or the idle condition is present on IRTX.

The IR timer is enabled when the IR enable bit (IREN) is set to 1. The IR Value register (IRV) defines the beginning value for the carrier modulator. During transmission, the IRV  register  is  initially  loaded  with  the  IRMT  value  and begins down counting towards 0000h, whereas in receive mode it counts upward from the initial IRV register value. During  the  receive  operation,  the  IRV  register  can  be configured  to  reload  with  0000h  when  capture  occurs on  detection  of  selected  edges  or  can  be  allowed  to continue free-running throughout the receive operation. An  overflow  occurs  when  the  IR  timer  value  rolls  over from 0FFFFh to 0000h. The IR overflow flag (IROV) is set to 1 and an interrupt is generated if enabled (IRIE = 1).

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## Carrier Generation Module

The IRCAH byte defines the carrier high time in terms of the number of IR input clocks, whereas the IRCAL byte defines the carrier low time.

- U IR Input Clock (fIRCLK) = fSYS/2 IRDIV[1:0]
- U Carrier  Frequency  (fCARRIER)  =  fIRCLK/(IRCAH  + IRCAL + 2)
- U Carrier High Time = IRCAH + 1
- U Carrier Low Time = IRCAL + 1
- U Carrier Duty Cycle = (IRCAH + 1)/(IRCAH + IRCAL + 2)

Figure 2. IR Transmit Frequency Shifting Example (IRCFME=0)

<!-- image -->

During transmission, the IRCA register is latched for each IRV down-count interval, and is sampled along with the IRTXPOL and IRDATA bits at the beginning of each new IRV down-count interval so that duty-cycle variation and frequency  shifting  is  possible  from  one  interval  to  the next, which is illustrated in Figure 2.

Figure  3  illustrates  the  basic  carrier  generation  and  its path to the IRTX output pin. The IR transmit polarity bit (IRTXPOL) defines the starting/idle state and the carrier polarity of the IRTX pin when the IR timer is enabled.

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## IR Transmission

During  IR  transmission  (IRMODE  =  1),  the  carrier generator  creates  the  appropriate  carrier  waveform, while the carrier modulator performs the modulation. The carrier  modulation  can  be  performed  as  a  function  of carrier cycles or IRCLK cycles dependent on the setting of  the  IRCFME  bit.  When  IRCFME  =  0,  the  IRV  down counter is clocked by the carrier frequency and thus the modulation is a function of carrier cycles. When IRCFME = 1, the IRV down counter is clocked by IRCLK, allowing carrier modulation timing with IRCLK resolution.

The IRTXPOL bit defines the starting/idle state as well as the carrier polarity for the IRTX pin. If IRTXPOL = 1, the IRTX pin is set to a logic-high when the IR timer module is enabled. If IRTXPOL = 0, the IRTX pin is set to a logic-low when the IR timer is enabled.

A  separate  register  bit,  IR  data  (IRDATA),  is  used  to determine whether the carrier generator output is output to  the  IRTX  pin  for  the  next  IRMT  carrier  cycles.  When IRDATA = 1,  the  carrier  waveform  (or  inversion  of  this waveform  if  IRTXPOL  =  1)  is  output  on  the  IRTX  pin during the next IRMT cycles. When IRDATA = 0, the idle condition, as defined by IRTXPOL, is output on the IRTX pin during the next IRMT cycles.

The IR timer acts as a down counter in transmit mode. An IR transmission starts when the IREN bit is set to 1 when IRMODE = 1; when the IRMODE bit is set to 1 when IREN = 1; or when IREN and IRMODE are both set to 1 in the same  instruction.  The  IRMT  and  IRCA  registers,  along with  the  IRDATA  and  IRTXPOL  bits,  are  sampled  at  the beginning of the transmit process and every time the IR timer value reloads its value. When the IRV reaches 0000h value, on the next carrier clock, it does the following:

- 1)  Reloads IRV with IRMT.
- 2)  Samples IRCA, IRDATA, and IRTXPOL.
- 3)  Generates IRTX accordingly.
- 4)  Sets IRIF to 1.
- 5)  Generates an interrupt to the CPU if enabled (IRIE = 1). To  terminate  the  current  transmission,  the  user  can

switch to receive mode (IRMODE = 0) or clear IREN to 0. Carrier Modulation Time = IRMT + 1 carrier cycles

## IR Transmit-Independent External Carrier and Modulator Outputs

The normal transmit mode modulates the carrier based upon the IRDATA bit. However, the user has the option to  input  the  modulator  (envelope)  on  an  external  pin  if desired. If the IRENV[1:0] bits are configured to 01b or 10b, the modulator/envelope is output to the IRTXM pin. The  IRDATA  bit  is  output  directly  to  the  IRTXM  pin  (if IRTXPOL = 0) on each IRV down-count interval boundary just  as  if  it  were  being  used  to  internally  modulate the  carrier  frequency.  If  IRTXPOL  =  1,  the  inverse  of the  IRDATA  bit  is  output  to  the  IRTXM  pin  on  the  IRV interval  down-count  boundaries.  See  Figure  4.  When the  envelope  mode  is  enabled,  it  is  possible  to  output either the modulated (IRENV[1:0] = 01b) or unmodulated (INENV[1:0] = 10b) carrier to the IRTX pin.

Figure 3. IR Transmit Carrier Generation and Carrier Modulator Control

<!-- image -->

## IR Receive

When configured in receive mode (IRMODE = 0), the IR hardware supports the IRRX capture function (Figure 5). The IRRXSEL[1:0] bits define which edge(s) of the IRRX pin should trigger the IR timer capture function.

The IR module starts operating in the receive mode when IRMODE = 0 and IREN = 1. Once started, the IR timer (IRV)  starts  up  counting  from  0000h  when  a  qualified

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

Figure 4. IR Capture

<!-- image -->

Figure 5. External IRTXM (Modulator) Output

<!-- image -->

capture event as defined by IRRXSEL happens. The IRV register is, by default, counting carrier cycles as defined by the IRCA register. However, the IR carrier frequency detect  (IRCFME)  bit  can  be  set  to  1  to  allow  clocking of  the  IRV  register  directly  with  the  IRCLK  for  finer resolution. When IRCFME = 0, the IRCA defined carrier is counted by IRV (Figure 6). When IRCFME = 1, the IRCLK clocks the IRV register.

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

Figure 6. IR Transmission Waveform (IRCFME = 0)

<!-- image -->

On  the  next  qualified  event,  the  IR  module  does  the following:

- 1)  Captures the IRRX pin state and transfers its value to IRDATA. If a falling edge occurs, IRDATA = 0. If a rising edge occurs, IRDATA = 1.
- 2)  Transfers its current IRV value to the IRMT.
- 3)   Resets IRV content to 0000h (if IRXRL = 1).
- 4)  Continues counting again until the next qualified event.

If  the  IR  timer  value  rolls  over  from  0FFFFh  to  0000h before a qualified event happens, the IR timer overflow (IROV) flag is set to 1 and an interrupt is generated, if enabled. The IR module continues to operate in receive mode until it is stopped by switching into transmit mode (IRMODE = 1) or clearing IREN = 0.

## Carrier Burst-Count Mode

A  special  mode  reduces  the  CPU  processing  burden when performing IR learning functions.  Typically,  when operating  in  an  IR  learning  capacity,  some  number  of carrier cycles are examined for frequency determination. Once the frequency has been determined, the IR receive function  can  be  reduced  to  counting  the  number  of carrier  pulses  in  the  burst  and  the  duration  of  the combined mark-space time within the burst. To simplify this process, the receive burst-count mode (as enabled by  the  RXBCNT  bit)  can  be  used.  When  RXBCNT  = 0,  the  standard  IR  receive  capture  functionality  is  in place.  When  RXBCNT  =  1,  the  IRV  capture  operation is  disabled  and  the  interrupt  flag  associated  with  the capture no longer denotes a capture. In the carrier burstcount  mode,  the  IRMT  register  only  counts  qualified edges.  The  IRIF  interrupt  flag  (normally  used  to  signal a capture when RXBCNT = 0) now becomes set if two IRCA cycles elapse without getting a qualified edge. The IRIF  interrupt  flag  thus  denotes  absence  of  the  carrier and  the  beginning  of  a  space  in  the  receive  signal. When the RXBCNT bit is changed from 0 to 1, the IRMT register is set to 0001h. The IRCFME bit is still used to define whether the IRV register is counting system IRCLK clocks  or  IRCA-defined  carrier  cycles.  The  IRXRL  bit defines whether the IRV register is reloaded with 0000h on  detection  of  a  qualified  edge  (per  the  IRXSEL[1:0] bits). Figure 7 and the descriptive sequence embedded in the figure illustrate the expected usage of the receive burst-count mode.

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

Figure 7. Receive Burst-Count Example

<!-- image -->

## 16-Bit Timers/Counters

The MAXQ305 provides two timers/counters that support the following functions:

- 16-bit	timer/counter
- 16-bit	up/down	autoreload
- Counter	function	of	external	pulse
- 16-bit	timer	with	capture
- 16-bit	timer	with	compare
- Input/output	enhancements	for	pulse-width	modulation
- Set/reset/toggle	output	state	on	comparator	match
- Prescaler	with	2n	divider	(for	n	=	0,	2,	4,	6,	8,	10)

## USARTS

The  MAXQ305  provides  two  Universal  Synchronous/ Asynchronous Receiver/Transmitter (USART) peripherals that include the following features:

- 2-wire	interface
- Full-duplex	operation	for	asynchronous	data	transfers
- Half-duplex	operation	for	synchronous	data	transfers

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

- Programmable	interrupt	when	transmit	or	receive	data operation completes
- Independent	programmable	baud-rate	generator
- Optional	9th	bit	parity	support
- Start/stop	bit	support

## Serial Peripheral Interface (SPI)

The  integrated  SPI  provides  an  independent  serial communication channel that communicates synchronously  with  peripheral  devices  in  a  multiple master  or  multiple  slave  system.  The  interface  allows access  to  a  4-wire,  full-duplex  serial  bus,  and  can  be operated in either master mode or slave mode. Collision detection is provided when two or more masters attempt a data transfer at the same time.

The maximum SPI master transfer rate is Sysclk/2. When operating as an SPI slave, the MAXQ305 can support up to a Sysclk/4 SPI transfer rate. Data is transferred as an 8-bit or 16-bit value, MSB first. In addition, the SPI module supports configuration of active SSEL state (active-low or active-high) through the slave active select.

Figure 8. On-Chip Oscillator

<!-- image -->

## Table 3. USART Mode Details

| MODE   | TYPE         | START BITS   | DATA BITS   | STOP BITS   |
|--------|--------------|--------------|-------------|-------------|
| Mode 0 | Synchronous  | N/A          | 8           | N/A         |
| Mode 1 | Asynchronous | 1            | 8           | 1           |
| Mode 2 | Asynchronous | 1            | 8 + 1       | 1           |
| Mode 3 | Asynchronous | 1            | 8 + 1       | 1           |

## General-Purpose I/O

The port pins have the following features:

- CMOS	output	drivers
- Schmitt	trigger	inputs
- Optional	weak	pullups	to	V DD when operating in input mode (with the exception of P1.6 and P1.7)

While the microcontroller is in a reset state, all port pins become  high  impedance  with  weak  pullups  disabled, unless  otherwise  noted.  From  a  software  perspective, each  port  appears  as  a  group  of  peripheral  registers with  unique  addresses.  Special  function  pins  can  also be used as general-purpose I/O pins when the special functions  are  disabled.  For  a  detailed  description  of the special functions available for each pin, refer to the MAXQ305 User's Guide .

## On-Chip Oscillator

An  external  quartz  crystal  or  a  ceramic  resonator  can be  connected  between  HFXIN  and  HFXOUT  on  the MAXQ305, as illustrated in Figure 8. Noise at HFXIN and HFXOUT can adversely affect on-chip clock timing. It is good design practice to place the crystal and capacitors near  the  oscillator  circuitry  and  connect  HFXIN  and HFXOUT to ground with a direct short trace. The typical values of external capacitors vary with the type of crystal to  be  used  and  should  be  initially  selected  based  on the  load  capacitance  as  suggested  by  the  crystal manufacturer.

## ROM Loader

The  ROM  loader  denies  access  to  the  system,  user loader,  or  user-application  memories  unless  an  areaspecific  password  is  provided.  The  ROM  loader  is  not available in ROM-only versions.

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## Loading Flash Memory

An  internal  bootstrap  loader  allows  reloading  over  a simple  JTAG  interface.  As  a  result,  software  can  be upgraded  in-system,  eliminating  the  need  for  a  costly hardware  retrofit  when  updates  are  required.  Remote software  uploads  are  possible  that  enable  physically inaccessible applications to be frequently updated. The interface hardware can be a JTAG connection to another microcontroller, or a connection to a PC serial port using a serial-to-JTAG converter such as the MAXQJTAG-001, available from Maxim. If in-system programmability is not required, a commercial gang programmer can be used for  mass  programming.  Activating  the  JTAG  interface and loading the test access port (TAP) with the system programming  instruction  invokes  the  bootstrap  loader. Setting the SPE bit to one during reset through the JTAG interface  executes  the  bootstrap-loader  mode  program that  resides  in  the  utility  ROM.  When  programming  is complete, the bootstrap loader can clear the SPE bit and reset the device, allowing the device to bypass the utility ROM and begin execution of the application software.

In addition, the ROM loader also enforces the memoryprotection  policies.  Passwords  that  are  16  words  are required to access the ROM loader interface.

Do not drive the LED or IRTX outputs while programming flash memory.

Figure 9. In-Circuit Debugger

<!-- image -->

Loading memory is not possible for ROM-only versions of the device.

## In-Circuit Debug and JTAG Interface

Embedded debug hardware and software are developed and  integrated  to  provide  full  in-circuit  debugging capability  in  a  user-application  environment.  These hardware and software features include the following:

- U Debug engine
- U Set of registers providing the ability to set breakpoints on register,  code,  or  data  using  debug  service  routines stored in ROM

Collectively,  these  hardware  and  software  features support two modes of in-circuit debug functionality:

- U
- Background mode: CPU is executing the normal user program

Allows the host to configure and set up the in-circuit debugger

- U Debug mode:

Debugger takes over the control of the CPU Read/write accesses to internal registers and memory

Single-step of the CPU for trace operation

The interface to the debug engine is the TAP controller, as shown in Figure 9. The interface allows for communication with  a  bus  master  that  can  either  be  automatic  test equipment  or  a  component  that  interfaces  to  a  higher level  test  bus  as  part  of  a  complete  system.  The communication operates across a 4-wire serial interface from a dedicated TAP that is compatible with the JTAG IEEE Standard 1149. The TAP provides an independent serial  channel  to  communicate  synchronously  with  the host system.

To prevent unauthorized access of the protected memory regions  through  the  JTAG  interface,  the  debug  engine prevents  modification  of  the  privilege  registers  and disallows all access to system memory, unless memory protection is disabled. In addition, all services (such as register display or modification) are denied when code is executing inside the system area. The debugger is not available for ROM-only versions of the device.

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## Operating Modes

The microcontroller has five power operating modes:

- U High performance
- U High voltage
- U Green
- U Idle
- U Stop

The  device  is  operating  in  high-performance  mode when  V DD   &gt;  V DD\_PFM ,  the  internal  voltage  regulator is  enabled  (HVREN  =  1),  the  high-performance  bit  is set  (PFMSEL  =  1),  and  f HXFIN   =  12MHz.  In  this  mode f SYSCLK  = 12MHz. The high-voltage regulator generates the  voltages  needed  for  flash  memory  programming, which is allowed in this mode.

The  device  is  operating  in  high-voltage  mode  when VDD &gt; V DD\_HV , HVREN = 1, PFMSEL = 0. In this mode f SYSCLK  = f HFXIN /3. The high -oltage regulator generates the  voltages  needed  for  flash  memory  programming, which is allowed in this mode.

Green mode is the lowest power mode that allows code execution. In this mode HVREN = PFMSEL = 0. In this mode  f SYSCLK   =  f HFXIN /3.  Flash  programming  is  not allowed in this mode.

Setting  the  IDLE  bit  in  the  CKCN  register  to  1  invokes the  idle  mode.  Once  in  idle  mode,  all  resources  are preserved and all clocks remain active with the enabled peripherals, and power monitor continues to work, so the processor can exit the idle state using any of the interrupt sources  that  are  enabled.  The  IDLE  bit  is  cleared automatically once the idle state is exited; allowing the processor  to  execute  the  instruction  that  immediately follows the instruction that set the IDLE bit.

The lowest power mode of operation for the MAXQ305 is  stop  mode.  The  user  software  can  enter  stop  mode any time  the  microcontroller is in a state where  code does not need to be executed. In this mode, CPU state and memories are preserved, but the CPU is not actively running. Wake-up sources include external I/O interrupts, the  power-fail  warning  interrupt,  or  a  power-fail  reset. The  nanopower  ring  oscillator  is  an  internal  ultra-low- power (400nA) 8kHz ring oscillator that can be used to drive a wake-up timer that exits stop mode. The wake-up timer is programmable by software in steps of 125µs up to approximately 8s.

The  power-fail  monitor  is  always  on  during  normal operation. However, it can be selectively disabled during stop mode to minimize power consumption. This feature is enabled using the power-fail monitor disable (PFD) bit in the PWCN register. The reset default state for the PFD bit  is  1,  which  disables  the  power-fail  monitor  function during  stop  mode.  If  power-fail  monitoring  is  disabled (PFD  =  1)  during  stop  mode,  the  circuitry  responsible for generating a power-fail warning or reset is shut down and neither condition is detected. Thus, the V DD  &lt; V RST condition does not invoke a reset state.

## Power-Fail Detection

Figure 10, Figure 11, Figure 12, and Figure 13 show the power-fail  detection  and  response  during  normal  and stop mode operation. If a reset is caused by a power-fail, the power-fail monitor can be set to one of the following intervals:

- U Always on-continuous monitoring
- U 2 11  nanopower ring oscillator clocks (~256ms)
- U 2 12  nanopower ring oscillator clocks (~512ms)
- U 2 13  nanopower ring oscillator clocks (~1.024s)

In the case where the power-fail circuitry is periodically turned on, the power-fail detection is turned on for two nanopower ring oscillator cycles. If V DD  &gt; V RST  during detection, V DD  is monitored for an additional nanopower ring oscillator period. If V DD  remains above V RST  for the third nanopower ring period, the CPU exits the reset state and resumes normal operation from utility ROM at 8000h after satisfying the crystal warm-up period.

If  a  reset  is  generated by any other event, such as the RESET pin being driven low externally or the watchdog timer, then the power-fail, internal regulator, and crystal remain on during the CPU reset. In these cases, the CPU exits the reset state in less than 20 external clock cycles after the reset source is removed.

RESET state in less than 20 crystal cycles after the reset source is removed.

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

Figure 10. Power-Fail Detection During Normal Operation

<!-- image -->

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

Table 4. Power-Fail Detection States During Normal Operation

| STATE   | POWER-FAIL DETECTOR   | REGOUT LDO   | BACKUP REGULATOR   | CRYSTAL OSCILLATOR   | SRAM DATA RETENTION   | NOTES                                                                                                                                                                                                   |
|---------|-----------------------|--------------|--------------------|----------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A       | OFF                   | OFF          | ON                 | OFF                  | -                     | V DD < V POR                                                                                                                                                                                            |
| B       | OFF                   | OFF          | ON                 | OFF                  | -                     | V POR < V DD < V RST nano-ring clock enabled X3 charge pump enabled                                                                                                                                     |
| C       | OFF                   | OFF          | ON                 | OFF                  | -                     | V DCX3 < V DCX3_OK Supply Voltage Monitor enabled                                                                                                                                                       |
| D       | ON                    | ON           | ON                 | ON                   | -                     | X2 charge pump enabled LDO enabled Crystal oscillator enabled                                                                                                                                           |
| E       | ON                    | ON           | OFF                | ON                   | -                     | V DCX2 > V DCX2_OK V REGOUT > V REGOUT_OK_L Backup regulator disabled CPU assume normal operation                                                                                                       |
| F       | ON                    | ON           | OFF                | ON                   | -                     | Power drop too short. Power-fail not detected                                                                                                                                                           |
| G       | ON                    | ON           | OFF                | ON                   | -                     | V RST < V DD < V PFW PFI is set when V RST < V DD < V PFW and maintains this state for at least t PFW , at which time a power-fail interrupt is generated (if enabled). CPU continues normal operation. |
| H       | ON (periodically)     | OFF          | ON                 | OFF                  | YES                   | V POR < V DD < V RST Power-fail detected CPU goes into reset Power-fail monitor turned on periodically                                                                                                  |
| I       | OFF                   | OFF          | ON                 | OFF                  | YES                   | V DD < V POR Device held in reset, no operation allowed                                                                                                                                                 |

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

Figure 11. Stop Mode and High Voltage Mode Transition

<!-- image -->

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

Table 5. Stop Mode and High Voltage Mode Transition

| STATE   | POWER-FAIL DETECTOR   | REGOUT LDO   | BACKUP REGULATOR   | CRYSTAL OSCILLATOR   | SRAM DATA RETENTION   | NOTES                                                                                                                                             |
|---------|-----------------------|--------------|--------------------|----------------------|-----------------------|---------------------------------------------------------------------------------------------------------------------------------------------------|
| A       | ON                    | ON           | OFF                | ON                   | -                     | V DCX2 > V DCX2_OK V REGOUT_OK_L < V REGOUT < V REGOUT_ OK_H CPU operates normally Flash writes not allowed                                       |
| B       | OFF                   | OFF          | ON                 | OFF                  | YES                   | Stop mode requested CPU stopped X3 charge pump, X2 charge pump, LDO, Power-fail detector and crystal oscillator disabled Backup regulator enabled |
| C       | OFF                   | OFF          | ON                 | OFF                  | YES                   | Stop mode exit requested nano-ring clock enabled X3 charge pump enabled                                                                           |
| D       | ON                    | OFF          | ON                 | OFF                  | YES                   | V DCX3 > V DCX3_OK Supply Voltage Monitor enabled                                                                                                 |
| E       | ON                    | ON           | ON                 | ON                   | YES                   | X2 charge pump enabled LDO enabled Crystal oscillator enabled                                                                                     |
| F       | ON                    | ON           | OFF                | ON                   | -                     | High voltage mode requested LDO output increased Nano-ring enabled                                                                                |
| G       | ON                    | ON           | OFF                | ON                   | -                     | High voltage mode accepted Flash writes allowed                                                                                                   |
| H       | ON                    | ON           | OFF                | ON                   | -                     | Low voltage mode requested Flash writes not allowed                                                                                               |

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

Figure 12. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled

<!-- image -->

## Table 6. Stop Mode Power-Fail Detection States with Power-Fail Monitor Enabled

| STATE   | POWER-FAIL        | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                             |
|---------|-------------------|----------------------|----------------------|------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| A       | On                | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                       |
| B       | On                | Off                  | Off                  | Yes              | Power drop too short. Power-fail not detected.                                                                                       |
| C       | On                | On                   | On                   | Yes              | V RST < V DD < V PFW . Power-fail warning detected. Turn on regulator and crystal. Crystal warmup time, t XTAL_RDY . Exit stop mode. |
| D       | On                | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                       |
| E       | On (Periodically) | Off                  | Off                  | Yes              | V POR < V DD < V RST . Power-fail detected. CPU goes into reset. Power-fail monitor turns on periodically.                           |
| F       | Off               | Off                  | Off                  | -                | V DD < V POR . Device held in reset. No operation allowed.                                                                           |

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

Figure 13. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled

<!-- image -->

## Table 7. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled

| STATE   | POWER-FAIL   | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                                                                                                                                                                                                                                                                    |
|---------|--------------|----------------------|----------------------|------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| A       | Off          | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                                                                                                                                                                                                                                                              |
| B       | Off          | Off                  | Off                  | Yes              | V DD < V PFW . Power-fail not detected because power-fail monitor is disabled.                                                                                                                                                                                                                                                                                              |
| C       | On           | On                   | On                   | Yes              | V RST < V DD < V PFW . An interrupt occurs that causes the CPU to exit stop mode. Power-fail monitor is turned on, detects a power-fail warning, and sets the power-fail interrupt flag. Turn on regulator and crystal. Crystal warmup time, t XTAL_RDY . On stop mode exit, CPU vectors to the higher priority of power-fail and the interrupt that causes stop mode exit. |

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## Table 7. Stop Mode Power-Fail Detection States with Power-Fail Monitor Disabled (continued)

| STATE   | POWER-FAIL        | INTERNAL REGULATOR   | CRYSTAL OSCILLATOR   | SRAM RETENTION   | COMMENTS                                                                                                                                                                                                      |
|---------|-------------------|----------------------|----------------------|------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| D       | Off               | Off                  | Off                  | Yes              | Application enters stop mode. V DD > V RST . CPU in stop mode.                                                                                                                                                |
| E       | On (Periodically) | Off                  | Off                  | Yes              | V POR < V DD < V RST . An interrupt occurs that causes the CPU to exit stop mode. Power-fail monitor is turned on, detects a power-fail, and puts CPU in reset. Power-fail monitor is turned on periodically. |
| F       | Off               | Off                  | Off                  | -                | V DD < V POR . Device held in reset. No operation allowed.                                                                                                                                                    |

## Applications Information

The  low-power,  high-performance  RISC  architecture  of this device makes it an excellent fit for many portable or battery-powered applications. It is ideally suited for applications such as universal remote controls that require the cost-effective integration of IR transmit/receive capability.

## Grounds and Bypassing

Careful  PCB  layout  significantly  minimizes  system-level digital  noise  that  could  interact  with  the  microcontroller or peripheral components. The use of multilayer boards is essential to allow the use of dedicated power planes. The  area  under  any  digital  components  should  be  a continuous  ground  plane  if  possible.  Keep  bypass capacitor leads short for best noise rejection and place the  capacitors  as  close  to  the  leads  of  the  devices  as possible.

CMOS design guidelines for any semiconductor require that no pin be taken above VDD or below GND. Violation of this guideline can result in a hard failure (damage to the silicon inside the device) or a soft failure (unintentional modification of memory contents). Voltage spikes above or  below  the  device's  absolute  maximum  ratings  can potentially cause a devastating IC latchup.

Microcontrollers  commonly  experience  negative  voltage  spikes  through  either  their  power  pins  or  general- purpose I/O pins. Negative voltage spikes on power pins are especially problematic as they directly couple to the internal power buses. Devices such as keypads can conduct electrostatic discharges directly into the microcontroller and seriously damage the device. System designers  must  protect  components  against  these  transients that can corrupt system memory.

## Additional Documentation

Designers must have the following documents to fully use all  the  features  of  this  device.  This  data  sheet  contains pin descriptions, feature overviews, and electrical specifications.  Errata  sheets  contain  deviations  from published  specifications.  User  guides  contain  detailed descriptions  of  device  features  and  peripherals  from a  programming  perspective.  The  following  documents can  be  downloaded  from www.maximintegrated.com/ microcontrollers :

- This	MAXQ305	data	sheet,	which	contains	electrical/ timing  specifications,  package  information,  and  pin descriptions.
- The MAXQ305 revision-specific errata sheet ( www.maximintegrated.com/errata )
- The	MAXQ305	User's	Guide,	which	contains	detailed information and programming guidelines for core features and peripherals.

## MAXQ305

## Low-Voltage Microcontroller with Infrared Module

## Development and Technical Support

Maxim  and  third-party  suppliers  provide  a  variety  of highly  versatile,  affordably  priced  development  tools, including the following:

- Compilers
- Integrated	Development	Environments	(IDEs)
- Serial-to-JTAG	and	USB-to-JTAG	interface	boards	for programming  and  debugging  (for  microcontrollers with rewriteable memory)

A partial list of development tool vendors can be found at www.maximintegrated.com/MAXQ\_tools .

Technical support is available at https://support. maximintegrated.com/micro .

## Ordering Information/Selector Guide

| PART             | TEMP RANGE       | PIN-PACKAGE   | OPERATING VOLTAGE (V)   | PROGRAM MEMORY (KB)   |   DATA MEMORY (KB) |   GPIO |
|------------------|------------------|---------------|-------------------------|-----------------------|--------------------|--------|
| MAXQ305J-0000+   | 0 N C to +70 N C | 44 TQFN-EP*   | 0.9 to 3.6              | 80 flash              |                  2 |     32 |
| MAXQ305X-0000+** | 0 N C to +70 N C | Bare die      | 0.9 to 3.6              | 80 flash              |                  2 |     32 |

Note:

Contact factory for information about masked ROM devices.

+ Denotes a lead(Pb)-free/RoHS-compliant package.

* EP = Exposed pad.

** Contact factory for availability.

## Package Information

For the latest package outline information and land patterns (footprints), go to www.maximintegrated.com/packages . Note that a '+', '#', or '-' in the package code indicates RoHS status only. Package drawings may show a different suffix character, but the drawing pertains to the package regardless of RoHS status.

| PACKAGE TYPE   | PACKAGE CODE   | OUTLINE NO.   | LAND PATTERN NO.   |
|----------------|----------------|---------------|--------------------|
| 44 TQFN-EP     | T4477+2        | 21-0144       | 90-0127            |

## Low-Voltage Microcontroller with Infrared Module

## Revision History

|   REVISION NUMBER | REVISION DATE   | DESCRIPTION     | PAGES CHANGED   |
|-------------------|-----------------|-----------------|-----------------|
|                 0 | 10/12           | Initial release | -               |

<!-- image -->

Maxim Integrated cannot assume responsibility for use of any circuitry other than circuitry entirely embodied in a Maxim Integrated product. No circuit patent licenses are implied. Maxim Integrated reserves the right to change the circuitry and specifications without notice at any time. The parametric values (min and max limits) shown in the Electrical Characteristics table are guaranteed. Other parametric values quoted in this data sheet are provided for guidance.

## MAXQ305